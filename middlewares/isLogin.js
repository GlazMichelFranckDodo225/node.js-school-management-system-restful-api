const Admin = require("../model/staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
    // Get Token from Header
    const headerObj = req.headers;
    // console.log(headerObj.authorization.split(" ")[1]);
    // const token = headerObj && headerObj.authorization && headerObj.split(" ")[1];
    const token = headerObj?.authorization?.split(" ")[1];
    // Verify Token
    const verifiedToken = verifyToken(token);
    if(verifiedToken) {
        // Find the Admin
        const user = await Admin.findById(verifiedToken.id)
            .select("name email role");
        // Save User into Request Object
        req.userAuth = user;
        next();

        return verifiedToken;
    } else {
        const error = new Error("Token Expired/Invalid");
        next(error);
    }

    
};

module.exports = isLogin;
const Admin = require("../model/staff/Admin");

const isAdmin = async (req, res, next) => {
    // Find the User
    const userId = req.userAuth._id;
    const adminFound = await Admin.findById(userId);

    // Check if the User is an Admin
    if(adminFound?.role == "admin") {
        next();
    } else {
        next(new Error("Access denied. Access reserved only for Admins"));
    }
};

module.exports = isAdmin;
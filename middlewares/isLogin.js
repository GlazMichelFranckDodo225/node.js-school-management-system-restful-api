const isLogin = (req, res, next) => {
    const isLogin = req.userAuth;
    console.log(req.userAuth);

    if(isLogin) {
        next();
    } else {
        const error = new Error("You are not Login");
        next(error);
    }
};

module.exports = isLogin;
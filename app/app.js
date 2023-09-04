// === Modules, Libraries and Frameworks ==
const express = require('express');
const morgan = require('morgan');
const adminRouter = require("../routes/staff/adminRouter");
const adminBaseUrl = "/api/v1/admins";
const app = express();

// === Middlewares ==
// app.use(morgan('combined'));
app.use(morgan('dev'));
// Parse incoming Data to JSON
app.use(express.json());
app.use((req, res, next) => {
    // console.log("Middleware", req);
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Custom Middlewares
let user = {
    name: "Josey",
    isAdmin: false,
    isLogin: true
};

const isLogin = (req, res, next) => {
    if(user.isLogin) {
        next();
    } else {
        res.status(401).json({
            msg: "Unauthorized"
        });
    }
};

const isAdmin = (req, res, next) => {
    if(user.isAdmin) {
        next();
    } else {
        res.status(401).json({
            msg: "Unauthorized. You are not Admin."
        });
    }
};

// app.use(isLogin);
// app.use(isAdmin);
app.use(isLogin, isAdmin);

// === Routes ==
app.use(adminBaseUrl, adminRouter);

module.exports = app;


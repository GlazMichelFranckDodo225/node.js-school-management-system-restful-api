// === Modules, Libraries and Frameworks ==
const express = require('express');
const adminRouter = require("../routes/staff/adminRouter");
const adminBaseUrl = "/api/v1/admins";
const app = express();

// === Middlewares ==
// Parse incoming Data to JSON
app.use(express.json());

// === Routes ==
app.use(adminBaseUrl, adminRouter);

// Custom Global Error Handler
app.use((err, req, res, next) => {
    // console.log(err);
    // Stack
    const stack = err.stack;
    // Actual message
    const message = err.message;
    // Status of message
    const status = err.status ? err.status : "Failed";
    const statusCode = err.statusCode ? err.statusCode : 500;

    res.status(statusCode).json({
        status,
        message,
        stack
    });
});

module.exports = app;


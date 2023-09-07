// === Modules, Libraries and Frameworks ==
const express = require('express');
const adminRouter = require("../routes/staff/adminRouter");
const {globalErrorHandler, notFoundError} = require('../middlewares/globalErrorHandler');
const adminBaseUrl = "/api/v1/admins";
const app = express();

// === Middlewares ==
// Parse incoming Data to JSON
app.use(express.json());

// === Routes ==
app.use(adminBaseUrl, adminRouter);

// Custom Global Error Handler
app.use(notFoundError);
app.use(globalErrorHandler);

module.exports = app;


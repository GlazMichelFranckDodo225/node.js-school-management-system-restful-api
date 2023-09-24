// === Modules, Libraries and Frameworks ==
const express = require('express');
const adminRouter = require("../routes/staff/adminRouter");
const {globalErrorHandler, notFoundError} = require('../middlewares/globalErrorHandler');
const academicYearRouter = require('../routes/academics/academicYear');
const baseUrl = "/api/v1";
const app = express();

// === Middlewares ==
// Parse incoming Data to JSON
app.use(express.json());

// === Routes ==
app.use(baseUrl + "/admins", adminRouter);
app.use(baseUrl + "/academic-years", academicYearRouter);


// Custom Global Error Handler
app.use(notFoundError);
app.use(globalErrorHandler);

module.exports = app;


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

// === Routes ==
app.use(adminBaseUrl, adminRouter);

module.exports = app;


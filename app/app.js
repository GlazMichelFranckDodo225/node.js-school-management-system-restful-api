// === Modules, Libraries and Frameworks ==
const express = require('express');
const morgan = require('morgan');

const app = express();

// === Middlewares ==
// app.use(morgan('combined'));
app.use(morgan('dev'));

module.exports = app;


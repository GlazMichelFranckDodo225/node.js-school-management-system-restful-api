// === Libraries and Frameworks ==
const express = require('express');
const morgan = require('morgan');

// === Constants ==
const PORT = process.env.PORT || 2020; 

const app = express();
// console.log(app);

// === Middlewares ==
// app.use(morgan('combined'));
app.use(morgan('dev'));

// Server
app.listen(PORT, () => console.log(`Server is running on Port : ${PORT}`));
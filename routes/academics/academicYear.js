const express = require('express');
const {
    createAcademicYear,
    getAcademicYears
} = require("../../controller/academics/academicYearController");
const isAdmin = require('../../middlewares/isAdmin');
const isLogin = require('../../middlewares/isLogin');
const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);
academicYearRouter.get("/", getAcademicYears);

module.exports = academicYearRouter;


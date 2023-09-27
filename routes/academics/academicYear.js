const express = require('express');
const {
    createAcademicYear,
    getAcademicYears,
    getAcademicYear
} = require("../../controller/academics/academicYearController");
const isAdmin = require('../../middlewares/isAdmin');
const isLogin = require('../../middlewares/isLogin');
const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);
academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);

module.exports = academicYearRouter;


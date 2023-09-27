const AsyncHandler = require('express-async-handler');
const AcademicYear = require('../../model/academic/AcademicYear');
const Admin = require("../../model/staff/Admin");

// @desc Create Academic Year
// @route POST /api/v1/academic-years
// @access Private
exports.createAcademicYear = AsyncHandler(async (req, res) => {
   const {name, fromYear, toYear} = req.body; 

   // Check If Academic Year Exists
   const academicYear = await AcademicYear.findOne({name});
   if(academicYear) {
      throw new Error("Academic Year Already Exists")
   }

   // Create Academic Year
   const academicYearCreated = await AcademicYear.create({
      name,
      fromYear, 
      toYear, 
      createdBy: req.userAuth._id
   });

   res.status(201).json({
    status: "Success",
    message: "Academic Year Created Successfully",
    data: academicYearCreated
   });
});

// @desc Get All Academic Years
// @route GET /api/v1/academic-years
// @access Private
exports.getAcademicYears = AsyncHandler(async (req, res) => {
   const academicYears = await AcademicYear.find();
   
   res.status(201).json({
    status: "Success",
    message: "Academic Years Fetched Successfully",
    data: academicYears
   });
});

// @desc Get Single Academic Year
// @route GET /api/v1/academic-years/:id
// @access Private
exports.getAcademicYear = AsyncHandler(async (req, res) => {
   const academicYears = await AcademicYear.findById(req.params.id);
   
   res.status(201).json({
    status: "Success",
    message: "Academic Years Fetched Successfully",
    data: academicYears
   });
});
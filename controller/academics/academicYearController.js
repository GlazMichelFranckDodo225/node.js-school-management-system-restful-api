const AsyncHandler = require('express-async-handler');
const AcademicYear = require('../../model/academic/AcademicYear');
const Admin = require("../../model/staff/Admin");

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
const express = require('express');
// Destructuring
const {
    registerAdminController,
    loginAdminController,
    getAdminsController,
    getAdminProfileController,
    updateAdminController,
    deleteAdminController,
    adminSuspendTeacherController,
    adminUnsuspendTeacherController,
    adminWithdrawTeacherController,
    adminUnwithdrawTeacherController,
    adminPublishExamResultsController,
    adminUnpublishExamResultsController
} = require('../../controller/staff/adminController');
const isLogin = require('../../middlewares/isLogin');
// Variables
const adminRouter = express.Router();
const idBaseUrl = "/:id";
const teacherBaseUrl = "/teacher" + idBaseUrl;
const examBaseUrl = "/exam" + idBaseUrl;

// === Routes ==
// Admin Register
adminRouter.post("/register", registerAdminController);

// Admin Login
adminRouter.post("/login", loginAdminController);

// Get all Admins
adminRouter.get("/", isLogin, getAdminsController);

// Get Single Admin
adminRouter.get("/profile", isLogin, getAdminProfileController);

// Update Admin
adminRouter.put(idBaseUrl, updateAdminController);

// Delete Admin
adminRouter.delete(idBaseUrl, deleteAdminController)

// Admin Suspend Teacher
adminRouter.put("/suspend" + teacherBaseUrl, adminSuspendTeacherController);

// Admin Unsuspend Teacher
adminRouter.put("/unsuspend" + teacherBaseUrl, adminUnsuspendTeacherController);

// Admin Withdraw Teacher
adminRouter.put("/withdraw" + teacherBaseUrl, adminWithdrawTeacherController);

// Admin Unwithdraw Teacher
adminRouter.put("/unwithdraw" + teacherBaseUrl, adminUnwithdrawTeacherController);

// Admin Publishes Exam Results
adminRouter.put("/publish" + examBaseUrl, adminPublishExamResultsController);

// Admin Unpublishes Exam Results
adminRouter.put("/unpublish" + examBaseUrl, adminUnpublishExamResultsController)


module.exports = adminRouter;
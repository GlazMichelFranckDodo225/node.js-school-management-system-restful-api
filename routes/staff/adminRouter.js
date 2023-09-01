const express = require('express');
const adminRouter = express.Router();

// === Routes ==
// Admin Register
adminRouter.post("/register", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin has been registered"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Login
adminRouter.post("/login", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin has been login"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Get all Admins
adminRouter.get("/", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "All Admins"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Get Single Admin
adminRouter.get("/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Single Admin"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Update Admin
adminRouter.put("/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Update Admin"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Delete Admin
adminRouter.delete("/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Delete Admin"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
})

// Admin Suspend Teacher
adminRouter.put("/suspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Suspend Teacher"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Unsuspend Teacher
adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unsuspend Teacher"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Withdraw Teacher
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Withdraw Teacher"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Unwithdraw Teacher
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unwithdraw Teacher"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Publishes Exam Results
adminRouter.put("/publish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Publishes Exam Results"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
});

// Admin Unpublishes Exam Results
adminRouter.put("/unpublish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unpublishes Exam Results"
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message
        })
    }
})


module.exports = adminRouter;
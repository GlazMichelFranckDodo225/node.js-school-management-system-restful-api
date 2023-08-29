// === Modules, Libraries and Frameworks ==
const express = require('express');
const morgan = require('morgan');

const app = express();

// === Middlewares ==
// app.use(morgan('combined'));
app.use(morgan('dev'));

// === Routes ==
// Admin Register
app.post("/api/v1/admins/register", (req, res) => {
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
})

// Admin Login
app.post("/api/v1/admins/login", (req, res) => {
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
})

// Get all Admins
app.get("/api/v1/admins", (req, res) => {
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
})

// Get single Admin
app.get("/api/v1/admins/:id", (req, res) => {
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
})

// Update Admin
app.put("/api/v1/admins/:id", (req, res) => {
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
})

// Delete Admin
app.delete("/api/v1/admins/:id", (req, res) => {
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

// Admin suspending Teacher
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
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
})

// Admin unsuspending Teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
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
})

// Admin Withdrawing Teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
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
})

// Admin Unwithdrawing Teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
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
})

// Admin Publishing Exam Results
app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
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
})

// Admin Unpublishing Exam Results
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
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

module.exports = app;


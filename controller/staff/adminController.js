// @desc Register Admins
// @route POST /api/v1/admins/register
// @access Private
exports.registerAdminController = (req, res) => {
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
}

// @desc Login Admins
// @route POST /api/v1/admins/login
// @access Private
exports.loginAdminController = (req, res) => {
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
}

// @desc Get All Admins
// @route GET /api/v1/admins/
// @access Private
exports.getAdminsController = (req, res) => {
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
}

// @desc Get Single Admin
// @route GET /api/v1/admins/:id
// @access Private
exports.getAdminController = (req, res) => {
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
}

// @desc Update Admin
// @route PUT /api/v1/admins/:id
// @access Private
exports.updateAdminController = (req, res) => {
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
}

// @desc Delete Admin
// @route DELETE /api/v1/admins/:id
// @access Private
exports.deleteAdminController = (req, res) => {
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
}

// @desc Admin Suspend Teacher
// @route PUT /api/v1/admins/suspend/teacher/:id
// @access Private
exports.adminSuspendTeacherController = (req, res) => {
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
}

// @desc Admin Suspend Teacher
// @route PUT /api/v1/admins/suspend/teacher/:id
// @access Private
exports.adminUnsuspendTeacherController = (req, res) => {
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
}

// @desc Admin Withdraw Teacher
// @route PUT /api/v1/admins/withdraw/teacher/:id
// @access Private
exports.adminWithdrawTeacherController = (req, res) => {
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
}

// @desc Admin Unwithdraw Teacher
// @route PUT /api/v1/admins/unwithdraw/teacher/:id
// @access Private
exports.adminUnwithdrawTeacherController = (req, res) => {
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
}

// @desc Admin Publishes Exam Results
// @route PUT /api/v1/admins/publish/exam/:id
// @access Private
exports.adminPublishExamResultsController = (req, res) => {
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
}

// @desc Admin Unpublishes Exam Results
// @route PUT /api/v1/admins/unpublish/exam/:id
// @access Private
exports.adminUnpublishExamResultsController = (req, res) => {
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
}
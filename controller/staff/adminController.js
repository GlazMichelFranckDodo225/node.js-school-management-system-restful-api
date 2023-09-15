const AsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const Admin = require('../../model/staff/Admin');
const generateToken = require('../../utils/generateToken');
const verifyToken = require('../../utils/verifyToken');

// @desc Register Admins
// @route POST /api/v1/admins/register
// @access Private
exports.registerAdminController = AsyncHandler(async (req, res) => {
    // Destructuring Properties from the Request Body
    const { name, email, password } = req.body;

    // Check if "email" exists
    const adminFound = await Admin.findOne({ email });
    if (adminFound) {
        throw new Error("Admin Already Exists");
    }

    // Create Salt
    const salt = await bcrypt.genSalt(10);
    // Hash the Password
    const passwordHashed = this.password = await bcrypt.hash(password, salt);

    // Register the User as Admin
    const user = await Admin.create(
        {
            name,
            email,
            password: passwordHashed
        }
    );

    // Send Response back
    res.status(201).json({
        status: "success",
        data: user,
        message: "Admin Registered Successfully"
    });
});

// @desc Login Admins
// @route POST /api/v1/admins/login
// @access Private
exports.loginAdminController = AsyncHandler(async (req, res) => {
    // Destructuring Properties from the Request Body
    const { email, password } = req.body;

    // Find User
    const user = await Admin.findOne({ email });
    if (!user) {
        return res.json({ message: "Invalid Login Credentials" });
    }

    // Verify Password
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        return res.json({ message: "Invalid Login Credentials" });
    } else {
        // return res.json({data: user});
        // Send the generated Token instead of the User
        return res.json({
            data: generateToken(user._id),
            message: "Admin Logged In Successfully"
        });
    }
});

// @desc Get All Admins
// @route GET /api/v1/admins/
// @access Private
exports.getAdminsController = AsyncHandler(async (req, res) => {
    const admins = await Admin.find();
    res.status(200).json({
        status: "Success",
        message: "All Admins Fetched Successfully",
        data: admins
    });
});

// @desc Get Single Admin
// @route GET /api/v1/admins/:id
// @access Private
exports.getAdminProfileController = AsyncHandler(async (req, res) => {
    // console.log(req.userAuth);
    const admin = await Admin.findById(req.userAuth._id).select(
        "-password -createdAt -updatedAt"
    );
    console.log(admin);

    if (!admin) {
        throw new Error("Admin Not Found");
    } else {
        res.status(200).json({
            status: "Success",
            data: admin,
            message: "Admin Profile Fetched Successfully"
        });
    }
});

// @desc Update Admin
// @route PUT /api/v1/admins/:id
// @access Private
exports.updateAdminController = AsyncHandler(async (req, res) => {
    const { email, name, password } = req.body;
    // Verify if the email is already taken
    const emailExist = await Admin.findOne({ email });
    if (emailExist) {
        throw new Error("This email is already taken");
    }

    // Create Salt
    const salt = await bcrypt.genSalt(10);
    // Hash the Password
    const passwordHashed = this.password = await bcrypt.hash(password, salt);

    // Check if User is updating Password
    if (password) {
        // Update Admin
        const admin = await Admin.findByIdAndUpdate(
            req.userAuth._id,
            {
                email,
                password: passwordHashed,
                name
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            status: "Success",
            data: admin,
            message: "Admin Updated Successfully"
        });
    } else {
        // Update Admin
        const admin = await Admin.findByIdAndUpdate(
            req.userAuth._id,
            {
                email,
                name
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            status: "Success",
            data: admin,
            message: "Admin Updated Successfully"
        });
    }

});

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
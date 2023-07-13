const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://dodoglazmichelfranck:3mdruTuch7D7ub@nodejsschoolmanagementm.ciop2ro.mongodb.net/NodejsSchoolManagementMystemApi?retryWrites=true&w=majority');
        console.log("DB connected successfully");   
    } catch (error) {
        console.log("DB connection failed : ", error.message);  
    }
};

dbConnect();
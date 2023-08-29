const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        // console.log(process.env);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");   
    } catch (error) {
        console.log("DB connection failed : ", error.message);  
    }
};

dbConnect();
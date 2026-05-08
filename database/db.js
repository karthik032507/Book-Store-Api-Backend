const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log("Database connection failed:", error);
        process.exit(1);    
    }
}

module.exports = connectToDB;
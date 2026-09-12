const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // 1. Fetch connection string from dotenv
    const dbUri = process.env.MONGO_URI || "mongodb://localhost:27017/web-dev";
    
    const conn = await mongoose.connect(dbUri);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;


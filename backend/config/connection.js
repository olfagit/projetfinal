const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB not connected");
  }
};

module.exports = connectDB;

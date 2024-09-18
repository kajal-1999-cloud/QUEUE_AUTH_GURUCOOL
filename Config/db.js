// db.js
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/gurucool');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message || "error in mongo");
    // process.exit(1);
  }
};

module.exports = connectDB;

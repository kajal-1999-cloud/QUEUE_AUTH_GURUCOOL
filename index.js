// index.js
const express = require('express');
const connectDB = require('./Config/db');
const authRoutes = require('./Controller/auth');
// const requestRoutes = require('./Routes/Request');
require('dotenv').config()
// Initialize the app
const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/auth', authRoutes);     

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Queue System');
});

// Server setup
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

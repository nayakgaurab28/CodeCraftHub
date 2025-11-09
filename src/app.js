// src/app.js
const express = require('express');
const connectDB = require('./config/db');
const PORT = require('./config/server');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
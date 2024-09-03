const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB  = require('./config/db');
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (You will add these later)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

module.exports = app;

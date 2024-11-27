import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import courseSelectionRoutes from './routes/courseSelectionRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';  // Import CORS

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

app.use(cors());

// Routes
app.use('/api', courseSelectionRoutes);
app.use('/api', userRoutes);
app.use('/api', courseSelectionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

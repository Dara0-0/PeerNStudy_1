// courseSelectionRoutes.js
import express from 'express';
import { saveCourseSelection } from './controllers/courseSelectionController.js';
import protect from './middleware/auth.js'; // Import the auth middleware

const router = express.Router();

// Route to handle saving course selection
router.post('/save-course-selection', protect, saveCourseSelection);

export default router;

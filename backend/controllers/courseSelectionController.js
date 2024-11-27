import CourseSelection from '../models/CourseSelection.js';

export const saveCourseSelection = async (req, res) => {
  const { selectedCourses } = req.body;

  // Check if courses are selected
  if (!selectedCourses || selectedCourses.length === 0) {
    return res.status(400).json({ message: 'No courses selected.' });
  }

  try {
    const userId = req.user.id; // Get user ID from auth middleware

    // Create new course selection
    const newSelection = new CourseSelection({
      selectedCourses,
    });

    // Save the selection to the database
    await newSelection.save();
    res.status(200).json({ message: 'Course selection saved successfully.' });

  } catch (error) {
    console.error("Error saving course selection:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

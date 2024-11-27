import CourseSelection from '../models/CourseSelection.js';

export const saveCourseSelection = async (req, res) => {
  const { selectedCourses } = req.body;

  // Check if courses are selected
  if (!selectedCourses || selectedCourses.length === 0) {
    return res.status(400).json({ message: 'Please select at least one course.' });
  }

  try {
    // Create a new course selection without a user ID, since the user doesn't provide their info yet
    const newSelection = new CourseSelection({
      selectedCourses,  // Save only the selected courses
    });

    // Save the selection to the database
    await newSelection.save();
    res.status(200).json({ message: 'Course selection saved successfully.' });

  } catch (error) {
    console.error("Error saving course selection:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

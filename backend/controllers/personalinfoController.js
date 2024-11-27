import User from '../models/User.js';

export const savePersonalInfo = async (req, res) => {
  const { idNo, sex, age, fullName, courseYear, college, contactNo, ucEmail } = req.body;

  // Validate if all fields are provided
  if (!idNo || !sex || !age || !fullName || !courseYear || !college || !contactNo || !ucEmail) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  try {
    const userId = req.user ? req.user.id : new mongoose.Types.ObjectId(); // Get or generate user ID

    // Create or update user info
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, // Try to find an existing user
      { idNo, sex, age, fullName, courseYear, college, contactNo, ucEmail }, // Update with new info
      { new: true, upsert: true } // If not found, create a new user
    );

    res.status(200).json({ message: 'Personal information saved successfully.', updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

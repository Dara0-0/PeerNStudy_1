import User from '../models/User.js';

export const savePersonalInfo = async (req, res) => {
  const { idNo, sex, age, fullName, courseYear, college, contactNo, ucEmail } = req.body;

  if (!idNo || !sex || !age || !fullName || !courseYear || !college || !contactNo || !ucEmail) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  try {
    const userId = req.user.id; // Get user ID from auth middleware

    const updatedUser = await User.findByIdAndUpdate(userId, {
      idNo,
      sex,
      age,
      fullName,
      courseYear,
      college,
      contactNo,
      ucEmail,
    }, { new: true });

    res.status(200).json({ message: 'Personal information saved successfully.', updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

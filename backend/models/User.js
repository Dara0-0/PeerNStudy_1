import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  idNo: {
    type: String,
    required: true,
    match: /^\d{2}-\d{4}-\d{3}$/, // Regex pattern for ##-####-###
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  courseYear: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  ucEmail: {
    type: String,
    required: true,
  },
  availability: {
    type: [Date],  // Store multiple dates/times
    required: false,  // Make this optional or required based on your logic
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

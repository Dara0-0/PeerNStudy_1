import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming token is sent as 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach user data to request
    next();
  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default protect;

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const setToken = (id, regno, email) => {
  return jwt.sign({ id, regno, email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const getToken = (token) => {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  const realtoken =
    token && token.startsWith("Bearer") ? token.split(" ")[1] : null;

  if (!realtoken) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
  try {
    const decoded = jwt.verify(realtoken, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
module.exports = { setToken, getToken, verifyToken };

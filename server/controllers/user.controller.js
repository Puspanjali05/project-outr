const { hash, hashcmp } = require("../utils/hash");
const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { setToken } = require("../middlewares/JWT");
dotenv.config();
//signup || create user
const createUser = async (req, res) => {
  const { uname, email, password, regno } = req.body;
  if (!uname || !email || !password || !regno) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user =
      (await User.findOne({ email })) || (await User.findOne({ regno }));
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      uname,
      email,
      password: await hash(password),
      regno,
      uid: uuidv4(),
    });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//signin || login
const loginUser = async (req, res) => {
  const { regno, password } = req.body;
  if (!regno || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ regno });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await hashcmp(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = setToken(user.uid, user.regno, user.email);
    return res.status(200).json({ token, uid: user.uid });
  } catch (error) {
    console.log(error);
  }
};
//profile
const profile = async (req, res) => {
  const { user } = req.body;
  try {
    const data = await User.findOne({ uid: user });
    if (!data) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { createUser, loginUser, profile };

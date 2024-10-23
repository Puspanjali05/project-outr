const express = require("express");
const {
  createUser,
  loginUser,
  profile,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/JWT");
const router = express.Router();

//GET requests
//POST requests
router.post("/profile", verifyToken, profile);
router.post("/create", createUser);
router.post("/login", loginUser);

//PUT requests

//DELETE requests

module.exports = router;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const UserSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    regno: {
      type: Number,
      unique: true,
      required: true,
    },
    gender: {
      type: String,

      dafault: "Not Set",
    },
    age: {
      type: Number,
    },
    phone: {
      type: Number,

      default: 0,

      sparse: true,
    },
    photo: {
      type: String,

      default:
        "https://plus.unsplash.com/premium_photo-1670530034951-b7d0428d6c9c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    role: {
      type: String,

      default: "Not Set",
    },
    skills: {
      type: Array,

      default: [],
    },
    projects: {
      type: Array,

      default: [],
    },
    friends: {
      type: Array,

      default: [],
    },
    Address: {
      type: String,

      default: "Not Set",
    },
    bio: {
      type: String,

      default: "Not Set",
    },
    social: {
      type: Array,

      default: [],
    },
    chats: {
      type: Array,

      default: [],
    },
    education: {
      type: Array,

      default: [
        {
          title: "Not Set",
          school: "Not Set",
          start: "Not Set",
          end: "Not Set",
          location: "Not Set",
          desc: "Not Set",
        },
      ],
    },
    experience: {
      type: Array,

      default: [
        {
          title: "Not Set",
          company: "Not Set",
          start: "Not Set",
          end: "Not Set",
          location: "Not Set",
          desc: "Not Set",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;

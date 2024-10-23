const express = require("express");
const app = express();
const socketIO = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config();
const io = socketIO(server);
const router = require("./routes/routes");
const cors = require("cors");
const connectDB = require("./dbconfigs/db.config.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

connectDB().then(() => {
  server.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
  });
});

module.exports = { server };

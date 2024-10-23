const socketIO = require("socket.io");
const { server } = require("..");
const io = socketIO(server);

module.exports = class Socket {
  constructor() {
    this.io = io;
    this.io.on("connection", (socket) => {
      console.log("User connected with socket id", socket.id);
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
};

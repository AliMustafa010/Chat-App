const { Server } = require("socket.io");

function socketSetup(server) {
    
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("chat message", (msg) => {
      console.log("message:", msg);
      socket.broadcast.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });
}

module.exports = socketSetup;

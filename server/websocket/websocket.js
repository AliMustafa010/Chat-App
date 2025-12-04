const { Server } = require("socket.io");
const Message = require("../model/message-model");

function socketSetup(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("register", (userId) => {
      if (!userId) return;
      socket.join(userId);
      socket.userId = userId;
      console.log(`Socket ${socket.id} joined room ${userId}`);
    });

    socket.on("chat message", async (msg) => {
      try {
        const saved = await Message.create(msg);

        if (msg.userId) {
          io.to(msg.userId).emit("chat message", saved);
        }

        socket.emit("chat message", saved);
      } catch (err) {
        console.error("Error saving message:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });

  return io;
}

module.exports = socketSetup;



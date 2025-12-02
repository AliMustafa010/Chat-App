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

    socket.on("chat message", async (msg) => {
      try {
        const saved = await Message.create(msg);
        io.emit("chat message", saved);
        console.log("message saved:", saved);
      } catch (err) {
        console.error("Error saving message:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });
}

module.exports = socketSetup;

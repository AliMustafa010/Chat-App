const Message = require("../model/message-model");

const message = async (req, res) => {
  try {

    if (req.method === "POST") {
      const saved = await Message.create(req.body);
      return res.json(saved);
    }

    const { me, other } = req.query;

    if (me && other) {
      const messages = await Message.find({
        $or: [
          { senderId: me, userId: other },
          { senderId: other, userId: me }
        ]
      }).sort({ _id: 1 });

      return res.json(messages);
    }

    const all = await Message.find().sort({ _id: 1 });
    return res.json(all);

  } catch (err) {
    console.error("Message error:", err);
    return res.status(500).json({ message: "Message Not Saved" });
  }
};

module.exports = { 
    message
};

const Message = require("../model/message-model");

const message = async (req, res) => {
    try {
        const messages = await Message.find({}, 'text sender time userId').sort({ _id: 1 });

        const formatted = messages.map(m => ({
            text: m.text,
            sender: m.userId,
            time: m.time,
            userId: m.userId
        }));

        res.json(formatted);
    } catch (err) {
        return res.status(500).json({ message: "Message Not Saved" });
    }
}

module.exports = {
    message
}



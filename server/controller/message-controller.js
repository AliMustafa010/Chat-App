const Message = require("../model/message-model");

const message = async (req, res) => {
    try {
        if (req.method === "POST") {
            const body = req.body;
            const saved = await Message.create(body);
            return res.json(saved);
        }

        const { me, other } = req.query;
        if (me && other) {
            const messages = await Message.find({
                $or: [
                    { $and: [{ userId: other }, { senderId: me }] },
                    { $and: [{ userId: me }, { senderId: other }] },
                    { $and: [{ userId: other }, { sender: req.query.meName }] },
                    { $and: [{ userId: me }, { sender: req.query.otherName }] },
                ],
            }).sort({ _id: 1 });

            const formatted = messages.map((m) => ({
                text: m.text,
                sender: m.sender,
                time: m.time,
                userId: m.userId,
                senderId: m.senderId || null,
            }));

            return res.json(formatted);
        }

        const messages = await Message.find({}, "text sender time userId senderId").sort({ _id: 1 });
        const formatted = messages.map((m) => ({
            text: m.text,
            sender: m.sender,
            time: m.time,
            userId: m.userId,
            senderId: m.senderId || null,
        }));

        res.json(formatted);
    } catch (err) {
        return res.status(500).json({ message: "Message Not Saved" });
    }
};

module.exports = {
    message
}



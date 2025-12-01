const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    img: {
        type: String,
        default: "https://i.pravatar.cc/150?u=default"
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["online", "offline", "busy"],
        default: "offline"
    }
});

module.exports = mongoose.model("Profile", profileSchema);

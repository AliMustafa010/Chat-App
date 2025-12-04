const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
});


const Message = mongoose.model('Message', messageSchema);
module.exports = Message;

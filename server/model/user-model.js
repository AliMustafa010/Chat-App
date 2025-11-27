const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 30
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
    },
    password: { 
        type: String, 
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        min: 0,
        max: 70,
        required: false
    },
    phone: {
        type: String,
        required: false,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

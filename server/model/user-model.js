const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, 'Username is required'], 
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [70, 'Age seems invalid'],
        required: false
    },
    phone: {
        type: String,
        required: false,
        trim: true,
        match: [/^\+?[0-9]{7,15}$/, 'Please enter a valid phone number']
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

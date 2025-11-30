const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    phone: {
        type: String,
        required: false,
    }
});



userSchema.pre('save', async function (next) {

    const user = this;

    if (!user.isModified('password')) {
        next();
    }

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    } catch (err) {
        next(err);
    }
})

userSchema.methods.generateToken = function() {
    const user = this;
     try {
        return jwt.sign(
            { 
                userId: user.id.toString(), 
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30s' }
        );
     } catch (err) {
        throw new Error('Token generation failed');
     }
}

const User = mongoose.model('User', userSchema);
module.exports = User;

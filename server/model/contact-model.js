const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
    },
    message : {
        type : String,
        required : true,
        maxlength : 50
    }
})

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;

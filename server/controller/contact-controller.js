const Contact = require("../model/contact-model")

const contactForm = async (req, res) => {

    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message : "Message Sent"});
        
    } catch (err) {
        return res.status(500).json({message : "Message Not Sent"});
    }
}

module.exports = {
    contactForm
}
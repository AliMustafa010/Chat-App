const mongoose = require('mongoose');

const URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(0);
    }
};

module.exports = connectDB;
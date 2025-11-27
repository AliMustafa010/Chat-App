require('dotenv').config();

const express = require('express');
const router = require('./router/auth-router');
const connectDB = require('./Utilis/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

module.exports = app;

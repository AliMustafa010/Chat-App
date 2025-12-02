require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoute = require('./router/auth-router');
const formRoute = require('./router/contact-router');
const usersRoute = require("./router/user-route")
const connectDB = require('./Utilis/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', authRoute);
app.use('/', formRoute);
app.use('/', usersRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

module.exports = app;

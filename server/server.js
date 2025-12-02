require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const socketSetup = require('./websocket/websocket')
const authRoute = require('./router/auth-router');
const usersRoute = require("./router/user-router");
const messageRoute = require("./router/message-router");
const connectDB = require('./Utilis/db');

const app = express();
const server = http.createServer(app);
const io = socketSetup(server);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', authRoute);
app.use('/', usersRoute);
app.use('/', messageRoute);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

module.exports = app;

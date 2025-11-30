require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const authRoute = require('./router/auth-router');
const formRoute = require('./router/contact-router');
const connectDB = require('./Utilis/db');
const setupWebSocket = require('./websocket/websocket');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', authRoute);
app.use('/', formRoute);

const server = http.createServer(app);

setupWebSocket(server);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

module.exports = app;

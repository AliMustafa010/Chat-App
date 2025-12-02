const express = require('express');
const { message } = require('../controller/message-controller');
const router = express.Router();


router.route('/messages').post(message);
router.route('/messages').get(message);

module.exports = router;
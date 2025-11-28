const express = require('express');
const { Home, Register, Login, Contact } = require('../controller/auth-controller');
const router = express.Router();

router.route('/').get(Home);
router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/contact').post(Contact);

module.exports = router;
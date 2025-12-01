const express = require("express");
const { getUsers, createUser } = require("../controller/profile-controller");

const router = express.Router();

router.route("/users")
  .get(getUsers)
  .post(createUser);

module.exports = router;

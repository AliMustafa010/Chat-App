const express = require("express");
const { getUsers, createUser, updateUser } = require("../controller/user-controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/profile" , updateUser);

module.exports = router;

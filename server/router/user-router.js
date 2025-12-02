const express = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controller/user-controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/profile" , updateUser);
router.delete("/profile", deleteUser);

module.exports = router;

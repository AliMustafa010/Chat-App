const Profile = require("../model/profile-model")

const getUsers = async (req, res) => {
  try {
    const users = await Profile.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { img, username, status } = req.body;

    const newUser = await Profile.create({
      img,
      username,
      status
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { getUsers, createUser };
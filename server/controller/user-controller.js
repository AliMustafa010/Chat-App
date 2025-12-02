const User = require("../model/user-model")

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { img, username, status } = req.body;

    const newUser = await User.create({
      img,
      username,
      status
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId, img, username } = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { img, username },
      { new: true } 
    );

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
};


module.exports = { getUsers, createUser, updateUser };
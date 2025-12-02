import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfilePage.css"

const ProfilePage = () => {
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        const loggedInUser = res.data.find((user) => user._id === userId);
        if (loggedInUser) {
          setImg(loggedInUser.img || "");
          setUsername(loggedInUser.username || "");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:5000/profile", {
        userId,
        img,
        username,
      });

      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="profile">
      <form className="profile-page" onSubmit={handleSubmit}>
        <h1>Update Profile</h1>

        <div>
          <label>Profile Image URL:</label>
          <div>
            <input
              type="text"
              placeholder="Enter image link..."
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Username:</label>
          <div>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

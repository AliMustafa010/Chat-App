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

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);


  return (
    <div className="profile">
      <form className="profile-page" onSubmit={handleSubmit}>
        <h1>Update Profile</h1>

        <div className="profile-page-image-update">
          <label>Profile Image URL:</label>
          <div className="profile-page-image">
            <input
              type="text"
              placeholder="Enter image link..."
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        </div>

        <div className="profile-page-username-update">
          <label>Username:</label>
          <div className="profile-page-username">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="profile-page-update-btn">
          <button type="submit" style={{ backgroundColor: "green" }}>Update</button>
        </div>

        <div className="profile-page-delete-btn">
          <button type="submit" style={{ backgroundColor: "red" }}>Delete Account</button>
          <div><p>This will permanently delete account.</p></div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

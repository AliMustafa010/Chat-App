import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

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
      // Send PUT request to backend update route
      const response = await axios.put("http://localhost:5000/profile", {
        userId,    // send the userId to identify which user to update
        img,
        username,
      });

      console.log("Profile updated:", response.data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="profile">
      <form className="profile-page" onSubmit={handleSubmit}>
        <h1>Update Profile</h1>

        <label>Profile Image URL:</label>
        <input
          type="text"
          placeholder="Enter image link..."
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;

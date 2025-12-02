import React, { useState } from "react";
import axios from "axios";
import "./ProfilePage.css"

const ProfilePage = () => {
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        img,
        username,
        status: status === 1 ? "online" : "offline"
      };

      const res = await axios.post("http://localhost:5000/users", userData);

      console.log("User created:", res.data);
      alert("User created successfully!");

      setImg("");
      setUsername("");
      setStatus(0);
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <div className="profile">

      <form className="profile-page" onSubmit={handleSubmit}>
        <h1>Create Profile</h1>

        {/* IMAGE INPUT */}
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

        {/* PREVIEW */}
        <div>
          {img && (
            <img
              src={img}
              alt="preview"
            />
          )}
        </div>

        {/* USERNAME INPUT */}
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

        {/* STATUS INPUT */}
        <div>
          <label>Status:</label>
          <div>
            <select value={status} onChange={(e) => setStatus(Number(e.target.value))}>
            <option value={0}>Offline</option>
            <option value={1}>Online</option>
          </select>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <button type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

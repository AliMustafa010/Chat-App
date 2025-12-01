import React, { useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState(0); // 0 = offline, 1 = online

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

      // Clear fields
      setImg("");
      setUsername("");
      setStatus(0);
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Create Profile</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, width: "300px" }}>

        {/* IMAGE INPUT */}
        <label>Profile Image URL:</label>
        <input
          type="text"
          placeholder="Enter image link..."
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        {/* PREVIEW */}
        {img && (
          <img
            src={img}
            alt="preview"
            style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover" }}
          />
        )}

        {/* USERNAME INPUT */}
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* STATUS INPUT */}
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(Number(e.target.value))}>
          <option value={0}>Offline</option>
          <option value={1}>Online</option>
        </select>

        {/* SUBMIT BUTTON */}
        <button type="submit" style={{ padding: "8px", background: "black", color: "white", cursor: "pointer" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;

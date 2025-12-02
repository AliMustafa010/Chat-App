import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./Chat.css";
import { BsArrowRightSquareFill } from "react-icons/bs";

const SOCKET_SERVER_URL = "http://localhost:5000";

const Chat = ({ user, logUser }) => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Failed to load messages:", err));
  }, []);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!inputMsg.trim()) return;

    const messageData = {
      userId: user._id,
      username: user.username,
      sender: logUser.username,
      text: inputMsg,
      time: new Date().toLocaleTimeString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };


    socketRef.current.emit("chat message", messageData);
    setInputMsg("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!user) {
    return <div style={{ color: "white" }}>Please select a user to start chatting.</div>;
  }

  return (
    <div className="chat-container">
      <div className="chat-profile">
        <div className="chat-profile-img">
          <img src={user.img} alt="profile" />
        </div>
        <div className="chat-profile-status">
          <h4>{user.username}</h4>
          <span>{user.status === 1 ? "Online" : "Offline"}</span>
        </div>
      </div>

      <div className="chat-chats" style={{ overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.userId === user._id ? "chat-message-self" : "chat-message-other"}`}
          >
            <p style={{ color: "white" }}>{msg.text}</p>
            <p style={{ color: "lightgray", fontSize: "10px" }}>{msg.time}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <div className="chat-input-element">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
          />
          <BsArrowRightSquareFill className="chat-input-arrow" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;

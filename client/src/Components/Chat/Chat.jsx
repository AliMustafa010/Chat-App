import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

import { BsArrowRightSquareFill } from "react-icons/bs";

const SOCKET_SERVER_URL = "http://localhost:5000";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const socketRef = useRef();

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
      text: inputMsg,
      timestamp: new Date().toISOString(),
    };

    socketRef.current.emit("chat message", messageData);

    setMessages((prev) => [...prev, messageData]);
    setInputMsg("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!user) {
    return <div>Please select a user to start chatting.</div>;
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

      <div className="chat-chats" style={{ overflowY: "auto", maxHeight: "300px" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.userId === user._id ? "chat-message-self" : "chat-message-other"
              }`}
          >
            {/* <strong style={{ color: "white" }}>{msg.username}: </strong> */}
            <span style={{ color: "white" }}>{msg.text}</span>
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

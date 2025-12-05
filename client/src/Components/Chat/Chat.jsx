import "./Chat.css";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { BsArrowRightSquareFill } from "react-icons/bs";

const SOCKET_SERVER_URL = "http://localhost:5000";

const Chat = ({ user, logUser }) => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    if (!user?._id || !logUser?._id) return;

    setMessages([]);

    fetch(`http://localhost:5000/messages?me=${logUser._id}&other=${user._id}`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Failed to load messages:", err));
  }, [user, logUser]);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);
    socketRef.current = socket;

    if (logUser?._id) {
      socket.emit("register", logUser._id);
    }

    socket.on("chat message", (msg) => {
      if (!user?._id || !logUser?._id) return;

      const isForThisChat =
        (msg.senderId === logUser._id && msg.userId === user._id) ||
        (msg.senderId === user._id && msg.userId === logUser._id);

      if (!isForThisChat) return;

      setMessages((prev) => {
        if (prev.some((m) => m._id === msg._id)) return prev;
        return [...prev, msg];
      });
    });

    return () => socket.disconnect();
  }, [logUser, user]);

  const sendMessage = () => {
    if (!inputMsg.trim() || !user?._id || !logUser?._id) return;

    const messageData = {
      userId: user._id,
      username: user.username,
      senderId: logUser._id,
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
        {messages
          .filter((msg) => {
            if (!msg) return false;
            if (!msg.userId || !msg.senderId) return false;
            return (
              (msg.userId === user._id && msg.senderId === logUser._id) ||
              (msg.userId === logUser._id && msg.senderId === user._id)
            );
          })
          .map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.userId === user._id ? "chat-message-self" : "chat-message-other"}`}
            >
              <div className="chat-message-content">
                <p style={{ color: "white" }}>{msg.text}</p>
                <p style={{ color: "lightgray", fontSize: "10px" }}>{msg.time}</p>
              </div>
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

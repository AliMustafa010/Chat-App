import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./Chat.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";

const SOCKET_SERVER_URL = "http://localhost:5000";

const Chat = ({ user, logUser }) => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const socketRef = useRef();
  const currentUserRef = useRef(user);
  const currentLogUserRef = useRef(logUser);
  const isMountedRef = useRef(false);
  const fetchReqIdRef = useRef(0);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    currentUserRef.current = user;
  }, [user]);

  useEffect(() => {
    currentLogUserRef.current = logUser;
  }, [logUser]);

  useEffect(() => {
    setMessages([]);

    fetchReqIdRef.current += 1;
    const thisFetchId = fetchReqIdRef.current;

    if (!user || !user._id || !logUser || !logUser._id) {
      return;
    }

    fetch(`http://localhost:5000/messages?me=${encodeURIComponent(logUser._id)}&other=${encodeURIComponent(user._id)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMountedRef.current) return;
        if (thisFetchId !== fetchReqIdRef.current) return;
        setMessages(data);
      })
      .catch((err) => console.error("Failed to load messages:", err));
  }, [user, logUser]);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on("chat message", (msg) => {
      try {

        const curUser = currentUserRef.current;
        const curLogUser = currentLogUserRef.current;
        if (!curUser || !curLogUser) return;

        const belongsToConversation =
          (msg.userId === curUser._id && msg.senderId === curLogUser._id) ||
          (msg.userId === curLogUser._id && msg.senderId === curUser._id);

        if (!belongsToConversation) return;

        if (!isMountedRef.current) return;

        setMessages((prev) => {
          if (msg._id && prev.some((m) => m._id === msg._id)) return prev;
          if (prev.some((m) => m.text === msg.text && m.time === msg.time && m.senderId === msg.senderId)) return prev;
          return [...prev, msg];
        });
      } catch (err) {
        console.error("Error handling incoming socket message:", err);
      }
    });

    socketRef.current.on("connect", () => {
      if (logUser && logUser._id) socketRef.current.emit("register", logUser._id);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socketRef.current && logUser && logUser._id) {
      socketRef.current.emit("register", logUser._id);
    }
  }, [logUser]);

  const sendMessage = () => {
    if (!inputMsg.trim()) return;
    if (!user || !user._id || !logUser || !logUser._id) return;

    const messageData = {
      userId: user._id,
      username: user.username,
      sender: logUser.username,
      senderId: logUser._id,
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

  const deleteForMe = (index) => {
    setMessages((prev) => prev.filter((_, i) => i !== index));
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
            // show only messages that belong to the active conversation
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

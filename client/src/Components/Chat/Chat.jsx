import React from 'react'
import "./Chat.css"

import { BsArrowRightSquareFill } from "react-icons/bs";

const Chat = ({ user }) => {

  if (!user) {
    return (
      <div className="chat-container">
        <h3>Select a user to start chatting</h3>
      </div>
    );
  }

  return (
    <div className="chat-container">

      <div className="chat-profile">
        <div className='chat-profile-img'>
          <img src={user.img} alt="profile" />
        </div>
        <div className='chat-profile-status'>
          <h4>{user.username}</h4>
          <span>{user.status === 1 ? "Online" : "Offline"}</span>
        </div>
      </div>

      <div className="chat-chats"></div>

      <div className="chat-input">
        <div className='chat-input-element'>
          <input type='text' />
          <BsArrowRightSquareFill className='chat-input-arrow'  />
        </div>
      </div>

    </div>
  );
}


export default Chat

import React from 'react'
import "./RightSidebar.css"
import users from '../../dummyData'

import { IoIosSearch } from "react-icons/io";
import Message from '../Message/Message';

const RightSidebar = () => {
  return (
    <div className="chat-container">

      <div>
        <div>
          <IoIosSearch style={{ fontSize: "30px", color: "white" }} />
          <input type='text' placeholder='Type a message' />
        </div>
      </div>

      <div>
        {
          users.map((user, index) => {
            return (
              <Message
                key={index}
                image={user.img}      
                name={user.username}
                status={user.status}
              />
            );
          })
        }

      </div>
    </div>
  )
}

export default RightSidebar

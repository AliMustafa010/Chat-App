import {React, useState} from 'react'
import "./RightSidebar.css"
import users from '../../dummyData'

import { IoIosSearch } from "react-icons/io";
import Message from '../Message/Message';

const RightSidebar = () => {

  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
      setSelected(item);
  }

  return (
    <div className="right-sidebar">

      <div className='right-sidebar-search'>
        <div className='right-sidebar-search-sub'>
          <IoIosSearch className='right-sidebar-search-icon' />
          <input type='text' placeholder='Type a message' />
        </div>
      </div>

      <div className='right-sidebar-chats'>
        <h2 className='right-sidebar-chats-chat'>Chats</h2>
        {
          users.map((user, index) => {
            return (
              <Message
                key={index}
                image={user.img}      
                name={user.username}
                status={user.status}
                selected={selected === user.id}
                onSelect={() => setSelected(user.id)} 
              />
            );
          })
        }

      </div>
    </div>
  )
}

export default RightSidebar

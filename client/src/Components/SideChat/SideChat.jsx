import React from 'react'
import './SideChat.css'

const SideChat = ({img, name, index}) => {
  return (
    <div className='side-chat-main'>
      <div className='side-chat-img'>
        <img src={img} alt='Not Found' />
      </div>
      <div className='side-chat-status'>
        <p>{name}</p>
        {
            index < 3
            ? <span>Online</span>
            : <span>Offline</span>
        }
      </div>
    </div>
  )
}

export default SideChat

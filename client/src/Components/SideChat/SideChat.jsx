import React from 'react'
import './SideChat.css'

const SideChat = ({img, name, index}) => {
  return (
    <div className='side-chat-main'>
      <img src={img} alt='Not Found' />
      <div>
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

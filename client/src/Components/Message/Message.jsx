import React from 'react'
import "./Message.css"

import { FaCircle } from "react-icons/fa";

const Message = ({image, name, status, selected, onSelect}) => {
  return (
    <div 
      className={'message' + (selected ? " selected-message-item" : "")}
      onClick={onSelect}
    >
        <div className='message-img'>
            <img className='message-img-element' src={image} alt='profile' />
        </div>
        <div className='message-info'>
            
            <div className='message-name'>
                <span>{name}</span>
            </div>

            <div className='message-status'>
                { status == 1 ? (
                  <div className='message-status-element'> 
                    <FaCircle className='message-status-online' />
                    <span className='status-online'>Online</span>
                  </div>
                  ):(
                    <div className='message-status-element'>
                      <FaCircle className='message-status-offline' />
                      <span className='status-offline'>Offline</span>
                    </div>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Message

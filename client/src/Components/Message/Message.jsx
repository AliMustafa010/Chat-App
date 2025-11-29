import React from 'react'
import "./Message.css"

import { FaCircle } from "react-icons/fa";

const Message = ({image, name, status}) => {
  return (
    <div className='message'>
        <div className='message-img'>
            <img className='message-img-element' src={image} alt='profile' />
        </div>
        <div className='message-info'>
            
            <div className='message-name'>
                <span>{name}</span>
            </div>

            <div className='message-status'>
                { status == 1 ? (
                  <div> 
                    <FaCircle style={{color : "green"}} />
                    <span className='status-online'>Online</span>
                  </div>
                  ):(
                    <div>
                      <FaCircle style={{color : "lightgray"}} />
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

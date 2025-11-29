import React from 'react'
import "./Message.css"

const Message = ({image, name, status}) => {
  return (
    <div>
        <div>
            <img src={image} alt='profile' />
        </div>
        <div>
            <span>{name}</span>
            <span>{status}</span>
        </div>
    </div>
  )
}

export default Message

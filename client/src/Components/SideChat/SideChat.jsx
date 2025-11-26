import React from 'react'
import './SideChat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
            ? <span>
                <FontAwesomeIcon icon={faCircle} style={{color : "green" , fontSize : "5px"}}/>
                <span className='green'>Online</span>
              </span>
            : <span>
                <FontAwesomeIcon icon={faCircle} style={{color : "grey" , fontSize : "5px"}}/>
                <span className='grey'>Offline</span>
              </span>
        }
      </div>
    </div>
  )
}

export default SideChat

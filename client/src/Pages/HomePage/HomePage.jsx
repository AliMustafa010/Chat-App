import React from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatContainer from '../../Components/ChatContainer/ChatContainer'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const HomePage = () => {
  return (
    <div className='home-page'>
        <Sidebar className='sidebar' />
        <ChatContainer className='chat-container' />
        <RightSidebar className='right-sidebar' />
    </div>
  )
}

export default HomePage

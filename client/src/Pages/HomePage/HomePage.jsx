import React from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatContainer from '../../Components/ChatContainer/ChatContainer'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const HomePage = () => {
  return (
    <div className='home-page'>
        <div className='sidebar'>
            <Sidebar />
        </div>
        <div className="chat-container">
            <ChatContainer />
        </div>
        <div className="right-sidebar">
            <RightSidebar />
        </div>
    </div>
  )
}

export default HomePage

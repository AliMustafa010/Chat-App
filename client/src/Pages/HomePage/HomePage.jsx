import React from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const HomePage = () => {
  return (
    <div className='home'>
        <div className='home-page'>

            {/* Sidebar */}
            <div className='sidebar-home'>
              <Sidebar />
            </div>

            {/* Right Sidebar */}
            <div className='right-sidebar-home'>
              <RightSidebar />
            </div>

            {/* Chat */}
            <div className='chat-home'>
              <Chat />
            </div>
            
        </div>
    </div>
  )
}

export default HomePage

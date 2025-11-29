import React from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const HomePage = () => {
  return (
    <div className='home'>
        <div className='home-page'>
            <div className='sidebar-home'>
              <Sidebar />
            </div>

            <div className='chat-home'>
              <Chat />
            </div>

            <div className='right-sidebar-home'>
              <RightSidebar />
            </div>
        </div>
    </div>
  )
}

export default HomePage

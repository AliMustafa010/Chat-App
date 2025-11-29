import React, { useState } from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='home'>
        <div className='home-page'>

            {/* Sidebar */}
            <div className='sidebar-home'>
              <Sidebar />
            </div>

            {/* Right Sidebar (send setSelectedUser to pick user) */}
            <div className='right-sidebar-home'>
              <RightSidebar 
                onSelectUser={setSelectedUser} 
                selectedUser={selectedUser}
              />
            </div>

            {/* Chat (receives selectedUser) */}
            <div className='chat-home'>
              <Chat user={selectedUser} />
            </div>
            
        </div>
    </div>
  )
}

export default HomePage

import React, { useState, useEffect } from 'react'
import './HomePage.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import axios from 'axios'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  const loggedInUser = users.find((u) => u._id === userId);
  const usersWithoutLoggedIn = users.filter(u => u._id !== userId);

  return (
    <div className='home'>
      <div className='home-page'>

        {/* Sidebar */}
        <div className='sidebar-home'>
          <Sidebar image={loggedInUser?.img} />
        </div>

        {/* Right Sidebar (send setSelectedUser to pick user) */}
        <div className='right-sidebar-home'>
          <RightSidebar
            users={usersWithoutLoggedIn}
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>

        {/* Chat (receives selectedUser) */}
        <div className='chat-home'>
          <Chat user={selectedUser} logUser={loggedInUser}/>
        </div>

      </div>
    </div>
  )
}

export default HomePage

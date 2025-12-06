import './HomePage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chat from '../../Components/Chat/Chat'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

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

        <div className='sidebar-home'>
          <Sidebar image={loggedInUser?.img} />
        </div>

        <div className='right-sidebar-home'>
          <RightSidebar
            loggedUser={loggedInUser}
            users={usersWithoutLoggedIn}
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>

        <div className='chat-home'>
          <Chat user={selectedUser} logUser={loggedInUser}/>
        </div>

      </div>
    </div>
  )
}

export default HomePage

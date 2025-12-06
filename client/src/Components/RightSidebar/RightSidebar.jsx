import "./RightSidebar.css";
import Message from "../Message/Message";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";

const RightSidebar = ({ loggedUser, users, selectedUser, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="right-sidebar">
      <div className="right-sidebar-sidebar">
        <Sidebar image={loggedUser?.img} />
      </div>
      <div className="right-sidebar-search">
        <div className="right-sidebar-search-sub">
          <IoIosSearch className="right-sidebar-search-icon" />
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="right-sidebar-chats">
        <h2 className="right-sidebar-chats-chat">Chats</h2>

        {filteredUsers.map(user => (
          <Message
            key={user._id}
            image={user.img}
            name={user.username}
            status={user.status}
            selected={selectedUser?._id === user._id}
            onSelect={() => onSelectUser(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;

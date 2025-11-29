import "./RightSidebar.css";
import users from "../../dummyData";
import { IoIosSearch } from "react-icons/io";
import Message from "../Message/Message";

const RightSidebar = ({ selectedUser, onSelectUser }) => {
  return (
    <div className="right-sidebar">
      <div className='right-sidebar-search'>
        <div className='right-sidebar-search-sub'>
          <IoIosSearch className='right-sidebar-search-icon' />
          <input type='text' placeholder='Type a message' />
        </div>
      </div>

      <div className='right-sidebar-chats'>
        <h2 className='right-sidebar-chats-chat'>Chats</h2>

        {users.map(user => (
          <Message
            key={user.id}
            image={user.img}
            name={user.username}
            status={user.status}
            selected={selectedUser?.id === user.id}
            onSelect={() => onSelectUser(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;

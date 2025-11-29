import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css"
import { 
  faHome,
  faMessage,
  faBell,
  faGear,
  faDoorClosed,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar">
        Profile
      </div>
      <div className="sidebar">
        <div className="sidebar-item-1">
            <FontAwesomeIcon icon={faHome} /> Home
        </div>
        <div className="sidebar-item-2">
            <FontAwesomeIcon icon={faMessage} /> Messages
        </div>
        <div className="sidebar-item-3">
            <FontAwesomeIcon icon={faBell} /> Notifications
        </div>
        <div className="sidebar-item-4">
            <FontAwesomeIcon icon={faGear} /> Settings
        </div>
      </div>

      <div className="sidebar">
        <FontAwesomeIcon icon={faRightFromBracket} /> Logout
      </div>
    </div>
  )
}

export default Sidebar

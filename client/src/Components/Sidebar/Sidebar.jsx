import React from 'react'
import { Link } from 'react-router-dom'
import  avatar from "../../Asset/avatar.jpg"
import "./Sidebar.css"

import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { GoBell, GoGear } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";


const Sidebar = () => {
  return (
    <div className='sidebar'>

        {/* Sidebar Image */}
        <div className="sidebar-profile">
            <Link to="">
                <img src={avatar} alt="profile" className='sidebar-profile-img' />
            </Link>      
        </div>

        {/* Sidebar Items */}
        <div className="sidebar-items">
            <div className="sidebar-item-1">
                <Link to="">
                    <IoHomeOutline style={{fontSize : "30px" , color : "white"}} />
                </Link>
            </div>
            <div className="sidebar-item-2">
                <Link to="">
                    <LuMessageSquare style={{fontSize : "30px" , color : "white" }} />
                </Link>
            </div>
            <div className="sidebar-item-3">
                <Link to="">
                    <GoBell style={{fontSize : "30px" , color : "white"}} />
                </Link>
            </div>
            <div className="sidebar-item-4">
                <Link to="">
                    <GoGear style={{fontSize : "30px" , color : "white"}} />
                </Link>
            </div>
        </div>

        {/* Sidebar Logout */}
        <div className="sidebar-logout">
            <Link to="">
                <IoLogOutOutline style={{fontSize : "30px" , color : "white"}} />
            </Link>
        </div>

    </div>
  )
}

export default Sidebar

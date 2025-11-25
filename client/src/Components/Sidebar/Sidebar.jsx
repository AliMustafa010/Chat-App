import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from "../../Asset/logo.png"
import avatar from "../../Asset/avatar.jpg"
import "./Sidebar.css"
import SideChat from '../SideChat/SideChat'

const Sidebar = () => {

    const userData = [
        {
            img: avatar,
            name: "User 1",
            index: 0
        },
        {
            img: avatar,
            name: "User 2",
            index: 4
        },
        {
            img: avatar,
            name: "User 3",
            index: 4
        },
        {
            img: avatar,
            name: "User 4",
            index: 3
        }
    ]
  return (
    <div>   
        <div className='sidebar-logo' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>
                <img src={logo} alt='Logo' width={50}/>
            </div>
            <div>
                Chat App
            </div>
            <div>
                <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: '24px', cursor: 'pointer' }} />
            </div>
        </div>

        <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search or start new chat" />
        </div>

        <div>
            {userData.map((user, index) => (
                <SideChat key={index} img={user.img} name={user.name} index={index} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar

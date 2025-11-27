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
            index: 1
        },
        {
            img: avatar,
            name: "User 4",
            index: 3
        },
        {
            img: avatar,
            name: "User 5",
            index: 2
        },
        {
            img: avatar,
            name: "User 6",
            index: 4
        },
        {
            img: avatar,
            name: "User 7",
            index: 3
        },
        {
            img: avatar,
            name: "User 8",
            index: 0
        },
        {
            img: avatar,
            name: "User 3",
            index: 1
        },
        {
            img: avatar,
            name: "User 4",
            index: 3
        },
        {
            img: avatar,
            name: "User 5",
            index: 2
        },
        {
            img: avatar,
            name: "User 6",
            index: 4
        }
    ]
  return (
    <div className='sidebar-main'>   
        <div className='sidebar-logo'>
            <div>
                <img src={logo} alt='Logo' width={30}/>
            </div>
            <div>
                Chat App
            </div>
            <div className='ellipis'>
                <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: '18px', cursor: 'pointer' }} />
            </div>
        </div>

        <div className='sidebar-search'>
            <div className='sidebar-search-icon'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className='sidebar-search-input'>
                <input type="text" placeholder='Search or start new chat' />
            </div>
        </div>

        <div className='sidebar-list'>
            {userData.map((user, index) => (
                <SideChat key={index} img={user.img} name={user.name} index={user.index} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar

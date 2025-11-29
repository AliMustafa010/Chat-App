import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from "../../Asset/avatar.jpg";
import "./Sidebar.css";

import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { GoBell, GoGear } from "react-icons/go";

const Sidebar = () => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <div className="sidebar">

            {/* Sidebar Image */}
            <div className="sidebar-profile">
                <Link to="">
                    <img src={avatar} alt="profile" className="sidebar-profile-img" />
                </Link>
            </div>

            {/* Sidebar Items */}
            <div className="sidebar-items">
                <div
                    className={"sidebar-item-1" + (selected === "item1" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item1")}
                >
                    <span className="sidebar-item-span"></span>
                    <Link to="">
                        <IoHomeOutline style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-2" + (selected === "item2" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item2")}
                >
                    <span className="sidebar-item-span"></span>
                    <Link to="">
                        <LuMessageSquare style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-3" + (selected === "item3" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item3")}
                >
                    <span className="sidebar-item-span"></span>
                    <Link to="">
                        <GoBell style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-4" + (selected === "item4" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item4")}
                >
                    <span className="sidebar-item-span"></span>
                    <Link to="">
                        <GoGear style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>
            </div>

            {/* Sidebar Logout */}
            <div className="sidebar-logout">
                <Link to="">
                    <IoLogOutOutline style={{ fontSize: "30px", color: "white" }} />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

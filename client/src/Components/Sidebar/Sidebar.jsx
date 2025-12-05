import "./Sidebar.css";
import { useState} from 'react';
import { Link } from 'react-router-dom';

import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { GoBell, GoGear } from "react-icons/go";

const Sidebar = ({image}) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <div className="sidebar">

            {/* Sidebar Image */}
            <div className="sidebar-profile">
                <Link to="/profile">
                    <img
                        src={image}
                        alt="profile"
                        className="sidebar-profile-img"
                    />
                </Link>
            </div>

            {/* Sidebar Items */}
            <div className="sidebar-items">
                <div
                    className={"sidebar-item-1" + (selected === "item1" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item1")}
                >
                    <Link to="">
                        <IoHomeOutline style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-2" + (selected === "item2" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item2")}
                >
                    <Link to="">
                        <LuMessageSquare style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-3" + (selected === "item3" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item3")}
                >
                    <Link to="">
                        <GoBell style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>

                <div
                    className={"sidebar-item-4" + (selected === "item4" ? " selected-sidebar-item" : "")}
                    onClick={() => handleSelect("item4")}
                >
                    <Link to="">
                        <GoGear style={{ fontSize: "30px", color: "white" }} />
                    </Link>
                </div>
            </div>

            {/* Sidebar Logout */}
            <div className="sidebar-logout">
                <Link to="/login">
                    <IoLogOutOutline style={{ fontSize: "30px", color: "white" }} />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

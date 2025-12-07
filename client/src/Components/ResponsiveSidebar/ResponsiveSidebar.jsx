import "./ResponsiveSidebar.css"
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoLogOutOutline } from 'react-icons/io5'
import { GoBell, GoGear } from 'react-icons/go'
import { LuMessageSquare } from 'react-icons/lu'
import { GiHamburgerMenu } from "react-icons/gi";

const ResponsiveSidebar = ({ image }) => {
    return (
        <div className='responsive-sidebar'>

            <div className="responsive-sidebar-display">
                <div className='responsive-sidebar-profile'>
                    <Link to="/profile">
                        <img
                            src={image}
                            alt="profile"
                            className="responsive-sidebar-profile-img"
                        />
                    </Link>
                </div>

                <div className='responsive-sidebar-ham'>
                    <GiHamburgerMenu className="responsive-sidebar-item-icon" />
                </div>
            </div>

            {/* <div className='responsive-sidebar-icons'>
                <div className="responsive-sidebar-item-1">
                    <Link to="">
                        <IoHomeOutline className="responsive-sidebar-item-icon" />
                    </Link>
                </div>

                <div className="responsive-sidebar-item-2">
                    <Link to="">
                        <LuMessageSquare className="responsive-sidebar-item-icon" />
                    </Link>
                </div>

                <div className="responsive-sidebar-item-3">
                    <Link to="">
                        <GoBell className="responsive-sidebar-item-icon" />
                    </Link>
                </div>

                <div className="responsive-sidebar-item-4">
                    <Link to="">
                        <GoGear className="responsive-sidebar-item-icon" />
                    </Link>
                </div>

                <div className="responsive-sidebar-item-5">
                    <Link to="/login">
                        <IoLogOutOutline className="responsive-sidebar-item-icon" />
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default ResponsiveSidebar

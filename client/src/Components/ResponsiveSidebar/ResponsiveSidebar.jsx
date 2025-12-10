import "./ResponsiveSidebar.css"
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoLogOutOutline } from 'react-icons/io5'
import { GoBell, GoGear } from 'react-icons/go'
import { LuMessageSquare } from 'react-icons/lu'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"

const ResponsiveSidebar = ({ image }) => {

    const[open,setOpen] = useState(false);

    return (
        <div className='responsive-sidebar'>

            <div className="responsive-sidebar-display">
                <div className='responsive-sidebar-profile'>
                    <img
                        src={image}
                        alt="profile"
                        className="responsive-sidebar-profile-img"
                    />
                </div>

                <div className='responsive-sidebar-ham' onClick={() => setOpen(!open)}>
                    <GiHamburgerMenu className="responsive-sidebar-item-icon" />
                </div>
            </div>

            <div>
                <div>
                    <Link to="">
                        <IoHomeOutline />
                    </Link>
                </div>

                <div>
                    <Link to="">
                        <LuMessageSquare />
                    </Link>
                </div>

                <div>
                    <Link to="">
                        <GoBell />
                    </Link>
                </div>

                <div>
                    <Link to="">
                        <GoGear />
                    </Link>
                </div>
                
                <div>
                    <Link to="">
                        <IoLogOutOutline />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveSidebar

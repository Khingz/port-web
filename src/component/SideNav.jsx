import { FaHome, FaRegPlayCircle, FaBook, FaUserAlt, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'
import '../component/sidenav.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome />
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt />
        },
        {
            path:"/portfolio",
            name:"Portfolio",
            icon:<FaBook/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaEnvelope />
        }
    ]
  return (
    <div className='side-nav-container'>
         <div className='side-nav-content' >
               <div className='toggle-bar'>
                  {!isOpen ? <FaBars onClick={toggle} /> : <FaTimes onClick={toggle}/>}  
               </div>
                <div className="menu-container">
                {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} >
                          <div className="menu-list">
                            <span className="menu-icon">{item.icon}</span>
                            <span className='menu' style={{display: isOpen ? 'inline' : 'none'}}>
                                <span className="hide-menu-mobile">
                                {item.name}
                                </span>
                            </span>
                            </div>
                       </NavLink>
                   ))
               }
                </div>
             
           </div>
    </div>
  )
}

export default SideNav
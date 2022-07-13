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
    <div className='side-nav-container' style={{width: isOpen ? '100%' : '5%'}}>
         <div className='side-nav-content' >
               <div className='toggle-bar'>
                  {!isOpen ? <FaBars onClick={toggle} /> : <FaTimes onClick={toggle}/>}  
               </div>
                <div className="menu-container">
                {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} >
                          <div className="menu-list">
                            <div className="icon">{item.icon}</div>
                            <div className='menu' style={{display: isOpen ? 'block' : 'none'}}>{item.name}</div>
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
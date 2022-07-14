import { FaHome, FaRegPlayCircle, FaBook, FaUserAlt, FaEnvelope, FaTimes, FaAlignLeft } from 'react-icons/fa'
import '../component/sidenav.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function SideNav() {
const [isOpen, setIsOpen ] = useState(false)

const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='side-nav-content' style={{width: isOpen ? '90px' : '30px'}}>
        <div className="toggle" onClick={toggle}>
           {!isOpen ? <FaAlignLeft /> : <FaTimes />} 
        </div>
        <div className="menu-container">
        <ul>
            <li>
                <NavLink to='/'>
                    <FaHome />
                    <span className='menu-name' style={{}}>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'>
                    <FaUserAlt />
                    <span className='menu-name'>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>
                    <FaBook />
                    <span className='menu-name'>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'>
                    <FaEnvelope />
                    <span className='menu-name'>Home</span>
                </NavLink>
            </li>
        </ul>   
        </div>    
    </div>
  )
}

export default SideNav
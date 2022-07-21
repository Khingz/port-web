import { FaHome, FaBook, FaUserAlt, FaEnvelope, FaTimes, FaAlignLeft } from 'react-icons/fa'
import '../component/sidenav.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function SideNav() {
const [isOpen, setIsOpen ] = useState(false)

const toggle = () => setIsOpen(!isOpen)

  return (
    <>
   <div className="nav-container">
        <div className='side-nav-content' style={{width: isOpen ? '130px' : '40px'}}>
        <div className="toggle" onClick={toggle}>
           {!isOpen ? <FaAlignLeft /> : <FaTimes />} 
        </div>
        <div className="menu-container">
        <ul>
            <li>
                <NavLink to='/'>
                    <span className='menu-icon'><FaHome /></span>
                    <span className='menu-name' style={{}}>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'>
                    <span className='menu-icon'><FaUserAlt /></span>
                    <span className='menu-name'>About</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>
                    <span className='menu-icon'><FaBook /></span>
                    <span className='menu-name'>Portfolio</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'>
                    <span className='menu-icon'><FaEnvelope /></span>
                    <span className='menu-name'>Contact</span>
                </NavLink>
            </li>
        </ul>   
        </div>    
    </div>
   </div>
   </>
  )
}

export default SideNav
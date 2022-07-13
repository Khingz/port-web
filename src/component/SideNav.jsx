import { FaHome, FaRegPlayCircle, FaBook, FaUserAlt, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'
import { NavLink } from "react-router-dom"


function SideNav() {
  return (
    <div className='side-nav'>
        <button><FaBars /></button>
        <ul>
            <li>
                <NavLink to='' activeClassName="active"><FaHome /></NavLink>
            </li>
            <li>
                <NavLink to='/about'activeClassName="active" ><FaUserAlt /></NavLink>
            </li>
            <li>
                <NavLink to='/resume' activeClassName="active"><FaRegPlayCircle /></NavLink>
            </li>
            <li>
                <NavLink to='portfolio' activeClassName="active"><FaBook /></NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName="active"><FaEnvelope /></NavLink>
            </li>
        </ul>
    </div>
  )
}

export default SideNav
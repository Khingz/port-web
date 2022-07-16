import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Home.css';
import avatarImg from '../assets/img/avatar-4.png'
// import splashImg from '../assets/img/splash.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
     <div className="home-grey-bg">
     <div className='home-container'>
       <div className="content-container">
        <h5>NON-AWARD WINNING WEB DEVELOPER</h5>
        <p>But trust me, I will blow your mind!!!</p>
        <div className='link-button'>
          <a href="" className='view-resume'>View Resume</a>
          <Link to='/contact' className='hire-me'>Hire Me</Link >
        </div>
        <div className='home-social-icon'>
          <a href="http://" target="_blank">
            <FaFacebook />
          </a>
          <a href="http://" target="_blank">
            <FaTwitterSquare />
          </a>
          <a href="http://" target="_blank">
            <FaInstagram />
          </a>
          <a href="http://" target="_blank">
            <FaLinkedin />
          </a>
        </div>
       </div>
       <div className="avatar-container">
        <div className="avatar-box">
          <img src={avatarImg} alt="avatar-img" />
        </div>
       </div>
    </div>
     </div>
    </div>
  )
}

export default Home
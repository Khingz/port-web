import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Home.css';
import avatarImg from '../assets/img/avatar-3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="home" initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}}  transition={{duration: 0.8}}>
     <div className="home-grey-bg">
     <div className='home-container'>
       <div className="content-container">
        <h5>NON-<span style={{color:'#db9200'}}>AWARD WINNING</span> WEB DEVELOPER</h5>
        <p>But trust me, I will blow your mind!!!</p>
        <div className='link-button'>
          <a href="https://drive.google.com/file/d/18NKcLo4OR3L0ehCoKqWyxW8wIe5ibGBn/view?usp=share_link" target='_blank' className='view-resume' rel="noreferrer">View Resume</a>
          <Link to='/contact' className='hire-me'>Hire Me</Link >
        </div>
        <div className='home-social-icon'>
          <a href="https://web.facebook.com/kings.medic" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/team_Dks" target="_blank" rel="noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/khingz_a/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/kingsley-akpan-162838116/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/khingz" target="_blank" rel="noreferrer">
            <FaGithub />
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
    </motion.div>
  )
}

export default Home
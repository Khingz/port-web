import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Home.css';
import avatarImg from '../assets/img/avatar-3.png'
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
          <a href="https://docs.google.com/document/d/1qQwyvHi5F0DPiq9pwpNPjTerkdjLcvqX/edit?usp=sharing&ouid=105689398385832492198&rtpof=true&sd=true" target='_blank' className='view-resume' >View Resume</a>
          <Link to='/contact' className='hire-me'>Hire Me</Link >
        </div>
        <div className='home-social-icon'>
          <a href="https://web.facebook.com/kings.medic" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/team_Dks" target="_blank">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/khingz_a/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/kingsley-akpan-162838116/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/khingz" target="_blank">
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
    </div>
  )
}

export default Home
import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Home() {
  return (
    <div className="main-container">
        <h4>Kingsley Akpan</h4>
        <p>I am <span>Developer</span></p>
        <div className="social-icons-container">
        <ul>
            <li>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </li>
            <li>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
            </li>
            <li>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Home
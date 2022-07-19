import './About.css'
import aboutImg from '../assets/img/about.svg'
import Footer from '../component/Footer'

const about = () => {
  return (
    <div className="about-container">
      <h3 className='mt-5'>ABOUT ME</h3>
       <div className="about">
         <div className="about-img">
          <img src={aboutImg} alt="" />
         </div>
        <div className="about-content">
        <p>
         Hi! I'm Kingsley, a freelancing frontend developer based in Uyo, Akwa Ibom State, Nigeria. I am a graduate from a paramedic background, but my imense love fot tech has made me divert a career path in the field. I describe myself as a passionate and problem solving develper who loves coding and the web platform.
         As a developer, i love contributong to open source projects, especially the ones that are challenging and help me learn great deal of new technologies.
         At my free time, i usually get involve in video gaming and play soccer too.
         </p>
         <div className="tech-familiar">
           <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>Javascript</li>
             <li>React JS</li>
             <li>Express JS</li>
             <li>Node JS</li>
             <li>Git and Github</li>
             <li>MongoDB</li>
           </ul>
         </div>
        </div>
       <Footer />
       </div>
    </div>
  )
}

export default about
import './About.css'
import aboutImg from '../assets/img/about.svg'
import Footer from '../component/Footer'
import { motion } from 'framer-motion'

const about = () => {
  return (
    <motion.div className="about-container" initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}} transition={{duration: 0.8}}>
      <h2>ABOUT ME</h2>
       <div className="about">
         <div className="about-img">
          <img src={aboutImg} alt="" />
         </div>
        <div className="about-content">
        <p>
          Code lover and a fan of the internet!! <span style={{color:'#db9200'}}>Hey there!</span> My name is Kingsley from Nigeria. I'm a freelancing web developer that has worked on sites for small and medium-sized enterprises. I can assist you with finding jobs, listing your services, or even setting up a whole internet business.
          HTML and CSS 3, Vanilla javascript, React, Node and Express are all skills I have. As a developer, i love contributong to open source projects, especially the ones that are challenging and help me learn great deal of new technologies.
          I'll oversee the entire job from conception to end.
          I value regular communication very much, so let's stay in touch!
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
    </motion.div>
  )
}

export default about
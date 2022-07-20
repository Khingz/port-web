import React from 'react'
import Footer from '../component/Footer'
import './Portfolio.css'
import projectsData from '../Projectdata'
import Project from '../component/Project'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.div className='portfolio-container' initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}}  transition={{duration: 0.8}}>
      <h2>PROJECT</h2>
      <div className="portfolio container">
        <div className="project-container">
          {projectsData.map((project, index) => {
            return (
              <Project project={project} key={index} />
            )
          })}
        </div>
      </div>
    <Footer />
    </motion.div>
  )
}

export default Portfolio
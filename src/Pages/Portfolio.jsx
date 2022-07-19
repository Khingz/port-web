import React from 'react'
import Footer from '../component/Footer'
import './Portfolio.css'
import projectsData from '../Projectdata'
import Project from '../component/Project'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
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
    </div>
  )
}

export default Portfolio
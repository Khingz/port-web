import React from 'react'

const Project = ({project}) => {
  return (
    <div className='project-card'>
       <div className="card-img">
        <img src={project.img[project.imgName]} alt="project-img" />
       </div>
        <div className="card-body">
            <p className='title'>{project.name}</p>
            <p className='desc'>{project.desc}</p>
            <div className="tools-used">
                {project.tools.map((tool, index) => {
                    return <p key={index}>{tool}</p>
                })}
            </div>
        </div>
        <div className="card-footer">
        <div className="card-url">
            <a href={project.gitRepo} target='_blank' rel="noreferrer">Source Code</a>
            <a href={project.liveURL} target='_blank' rel="noreferrer">Live URL</a>
        </div>
        </div>
    </div>
  )
}

export default Project
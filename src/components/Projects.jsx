import React from 'react'
import ProjectItem from './ProjectItem'
import { projectData } from "../constants/constants"

const Projects = () => {
  return (
    <div className="section-root" id="projects">
      <h3 className="title-section accented-text">Yes, I Code and Here's the Proof</h3>
      <p>Here are the projects that I've built throughout my journey</p>
      <div className="project-container">
        {projectData.map(({title, desc, url, img, gitHub, tools}) => 
          <ProjectItem 
            title={title}
            desc={desc}
            url={url}
            img={img}
            gitHub={gitHub}
            tools={tools}
            />
          )
        }
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import ProjectItem from './ProjectItem'
import { projectData } from "../constants/constants"

const Projects = () => {
  return (
    <div className="section-root" id="projects">
      <p className="sub-text highlight-text">My projects</p>
      <h3 className="large-text">Yes, I Code and Here's the Proof</h3>
      
      <div className="project-container">
        {projectData.map(({title, desc, url, img, gitHub, tools, color}) => 
          <ProjectItem 
            title={title}
            desc={desc}
            url={url}
            img={img}
            gitHub={gitHub}
            tools={tools}
            bgColor={color}
            />
          )
        }
      </div>
    </div>
  )
}

export default Projects

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import "../styles/projects.css";

const ProjectItem = ({title, desc, url, gitHub, img, tools, bgColor}) => {

  return (
    <div className="project-item" 
    // style={{backgroundColor : `${bgColor}`}}
    >
      <div className="project-icon" >
        <img src={require(`../assets/${img}`)} alt="project-img" className="project-img"/>
      </div>
      <div className="project-info">
        <a className="large-text" 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer">
          {title}
        </a>
          <p className="project-desc">{desc}</p>
        <div>
          <div className="project-links-container">
          {url &&  
              <a href={url}
                target="_blank" 
                rel="noopener noreferrer">
               <FontAwesomeIcon icon={faArrowRight} />
              </a>
            }
            <a href={gitHub} 
              target="_blank" 
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>

          </div>
          </div>

      </div>

    </div>
  )
}

export default ProjectItem

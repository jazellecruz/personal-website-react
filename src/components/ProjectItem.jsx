import {ReactComponent as LinkIcon} from "../assets/link-icon.svg"
import {ReactComponent as GitHubIcon} from "../assets/github-logo.svg"
import "../styles/projects.css";

const ProjectItem = ({title, desc, url, gitHub, img}) => {

  return (
    <div className="project-item" >
      <div className="project-icon" >
        <img src={require(`../assets/${img}`)} alt="project-img" className="project-img"/>
      </div>
      <div className="project-info">
        <a className="large-text project-title" 
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
                rel="noopener noreferrer"
                className="scale-on-hover">
                <LinkIcon />
              </a>
            }
            <a href={gitHub} 
              target="_blank" 
              rel="noopener noreferrer"
              className="scale-on-hover">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem

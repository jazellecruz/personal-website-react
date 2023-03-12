import "../styles/projectItem.css";
import altImg from "../assets/app.png";
import gh from "../assets/github.png";
import link from "../assets/link.png"

const ProjectItem = ({title, desc, url, gitHub, img, tools}) => {

  return (
    <div className="project-item">
      <div className="project-icon">
        <img src={altImg} alt="project-img" className="project-img"/>
      </div>
      <div className="project-info">
        <header>
          <p className="project-title bold-text">{title}</p>
          <p className="project-desc">{desc}</p>
        </header>
        <footer>
          <ul className="tech-list project">
            {tools.map(tool => <li>{tool}</li>)}
          </ul>
          <div className="project-links-container">
            <a href={gitHub} >
              <img src={gh} alt="gh-icon" />
            </a>
            {url &&  
              <a href={url} >
               <img src={link} alt="link-icon" /> 
              </a>
            }
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ProjectItem

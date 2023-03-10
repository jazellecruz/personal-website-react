import "../styles/projectItem.css";
import altImg from "../assets/folder-icon.png"

const ProjectItem = ({title, desc, url, gitHub, img, tools}) => {

  return (
    <div className="project-item">
      <header>
        <div className="project-top">
          <img src={altImg} alt="project-img" className="project-img"/>
          <div className="project-links-container">
            <a href={gitHub} >
              GitHub
            </a>
            <a href={url} >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-info">
          <p className="project-title bold-text">{title}</p>
          <p className="project-desc">{desc}</p>
        </div>
      </header>
        <footer>
        <ul className="tech-list project">
          {tools.map(tool => <li>{tool}</li>)}
        </ul>
        </footer>
      </div>
  )
}

export default ProjectItem

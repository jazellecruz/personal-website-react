import "../styles/projectItem.css";

const ProjectItem = ({title, desc, url, gitHub, img, tools}) => {
  return (
    <div className="project-item">
      <div className="project-img-container">
        <img src={img} alt="project-img"></img>
      </div>
      <div>
        <p>{title}</p>
        <p>{desc}</p>
        <ul>
          {tools.forEach(tool => <li>{tool}</li>)}
        </ul>
        <div className="project-links-container">

        </div>
      </div>
    </div>
  )
}

export default ProjectItem

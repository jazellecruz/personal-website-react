import {skills} from "../constants/constants"
import "../styles/aboutMe.css"

const AboutMe = () => {
  return (
    <div className="section-root">
      <div className="about-container">
        <div className="about-desc-container">
          <p className="sub-text">Hello! My name is <span className="highlight-text">Jazz Cruz</span>.</p>
          <p className="sub-text">
            I enjoy planning and developing software using <span className="highlight-text">NodeJS</span>.
            I focus more on the <span className="highlight-text">back-end</span> side of development 
            and enjoy designing the application's architecture with a touch of creativity. My main experience is 
            in <span className="highlight-text">developing web applications</span> using several frameworks, 
            such as <span className="highlight-text">ExpressJS</span>, as well as databases 
            like <span className="highlight-text">MySQL</span>.
          </p>
          <p className="sub-text bold-text">
            I am currently on a mission to explore and <span className="highlight-text">level-up</span> my tech 
            skills (and to also score a sweet sweet <span className="highlight-text">job</span>!).
          </p>
          <p className="sub-text">
            Oh by the way, here is a list of <span className="highlight-text">technologies</span> and <span className="highlight-text">tools</span> I like to use: 
          </p>
          <ul className="skills-list">
            {skills.map(skill => 
              <li className=" bold-text lighter-text">
              <img src={require(`../assets/${skill.icon}`)}  alt="tool-logo" />
              {skill.tool}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

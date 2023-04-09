import { Avatar } from "@mui/material"
import me from "../assets/me_004.jpg"
import resume from "../static/jazellecruz-resume.pdf";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="section-root hero-section">
      <div className="avatar-container">
        <Avatar src={me} />
      </div>
      <p className="sub-text">I'm Jazz — a <span className="highlight-text">Software Engineer</span>.</p>
      <h1 className="large-text tagline">I like to craft digital-goodies for the web.</h1>
      <a className="animated-arrow" href={resume} target="_blank" rel="noopener noreferrer" >
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span class="main">
          <span className="text">
            Check out my <span className="highlight-text">Resume</span>
          </span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </a>
    </div>
  )
}

export default Hero;

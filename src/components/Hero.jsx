import {Avatar } from "@mui/material"
import me from "../assets/me_004.jpg"
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="section-root hero-section">
      <div className="avatar-container">
        <Avatar src={me} />
      </div>
      <p>Hi, my name is Jazz</p>
      <h1 className="tagline accented-text">I turn ideas into life, one code at a time.</h1>
      {/* <p className="tagline">I turn ideas into life, one code at a time.</p> */}
      <p>an aspiring <span className="job-title">Software Engineer</span>.</p>
    </div>
  )
}

export default Hero;

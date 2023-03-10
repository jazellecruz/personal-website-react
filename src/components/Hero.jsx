import {Avatar } from "@mui/material"
import me from "../assets/me_004.jpg"
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="section-root hero-section">
      <div className="avatar-container">
        <Avatar src={me} />
      </div>
      <p>Hi, my name is Jazelle</p>
      <h1 className="tagline accented-text">I turn ideas into life, one code at a time.</h1>
      {/* <p className="tagline">I turn ideas into life, one code at a time.</p> */}
      <p>I'm a <span className="job-title">Software Engineer</span> student who 
      likes to solve problems through code.</p>
    </div>
  )
}

export default Hero;

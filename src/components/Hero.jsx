import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="section-root hero-section">
      <p>Hello, my name is</p>
      <h1 className="name accented-text">Jazelle Cruz</h1>
      <p className="tagline">I turn ideas into life, one code at a time.</p>
      <p className="intro">I'm a <span className="job-title">Software Engineer</span> student who 
      likes to solve problems through code.</p>
    </div>
  )
}

export default Hero;

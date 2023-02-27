import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="section-root hero-section">
      <p>Hello, my name is</p>
      <h1 className="name accented-text">Jazelle Cruz</h1>
      <p className="intro">an aspiring <span className="job-title">Software Engineer</span></p>
    </div>
  )
}

export default Hero;

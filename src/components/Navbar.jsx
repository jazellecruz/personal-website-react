import {useState} from "react"
import "../styles/navbar.css"
import brand from "../assets/brand-32x32.png"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }
  
  return (
    <div className="navbar-root">
      <img src={brand} alt="logo" className="brand-logo"/>
      <button className="mobile-nav-btn" onClick={() => handleClick()}>Menu</button>
      <ul className={`nav-links-container ${isNavOpen && "nav-open"}`}>
        <li className="nav-link">
          <a href="#projects">projects</a>
        </li>
        <li className="nav-link">
          <a href="#contact">contact</a>
        </li>
        <li className="nav-link">
          <a href="#socials">socials</a>
        </li>
        <li className="nav-link">
          <button className="resume-btn">resume</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

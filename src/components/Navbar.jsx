import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-root">
      <ul>
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

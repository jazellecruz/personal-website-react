import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-root">
      <ul>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

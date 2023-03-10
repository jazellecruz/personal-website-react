import "../styles/global.css";
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Socials from "../components/Socials"

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Socials />
        </main>
    </div>
  );
}

export default App;

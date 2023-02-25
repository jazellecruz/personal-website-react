import "../styles/global.css";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Socials from "../components/Socials"

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;

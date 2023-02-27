import "../styles/global.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Socials from "../components/Socials"

function App() {
  return (
    <div className="App">
    <Navbar />
      <main>
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

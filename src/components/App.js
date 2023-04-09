import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Socials from "../components/Socials"
import Footer from "./Footer";
import "../styles/global.css";

function App() {
  return (
    <div className="App">
        <main>
          <Hero />
          <AboutMe />
          <Projects />
          <Contact />
          <Socials />
        </main>
        <Footer/>
    </div>
  );

}

export default App;

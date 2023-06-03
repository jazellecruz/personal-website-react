import { useState, useContext } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Socials from "./Socials";
import Footer from "./Footer";
import Toast from "./Toast"
import { ToastContext } from "../context";
import "../styles/global.css";

function App() {
  const [toastType, setToastType] = useState();
  const [open, setOpen] = useState(false);

  const defineToastType = (toast) => {
    setToastType({
      message: toast.message,
      severity: toast.severity
    });
    openToast();

    setTimeout(closeToast, 4000)
  }

  const openToast = () => {
    setOpen(true);
  }

  const closeToast = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <ToastContext.Provider value={defineToastType}>
          <Contact />
        </ToastContext.Provider>
        <Socials />
      </main>
      <Footer/>
      <Toast type={toastType} open={open} handleClose={closeToast}/>
    </div>
  );
}

export default App;

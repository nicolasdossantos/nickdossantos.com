import React, { useState } from "react";
import "./App.css";

import LadingPage from "./components/LandingPage";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ContactCard from "./components/ContactCard";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Element } from "react-scroll";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(true)
  const [previousComponent, setPreviousComponent] = useState("")

  function handleContact() {
    setIsContactOpen(!isContactOpen)
    setPreviousComponent("")
  }

  return (
    <>
      {!isContactOpen && (
        <div>
          <Element name="landing">
            <LadingPage className="pbxl" />
          </Element>

          <Element name="education">
            <Education />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>

          <Element name="skills">
            <Skills />
          </Element>

          <Element name="experience">
            <Experience />
          </Element>
        </div>
      )}
      {isContactOpen && <ContactCard handleContact={handleContact}/>}
    </>
  );
}

export default App;

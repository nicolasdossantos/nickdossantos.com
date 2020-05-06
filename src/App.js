import React, { useState } from 'react'
import './App.css'
import LadingPage from './components/LandingPage'
import Education from './components/Education'
import Skills from './components/Skills'
import ContactCard from './components/ContactCard'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { Element } from 'react-scroll'

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isFirstTime, setIsFirstTime] = useState(true)

  const handleContact = () => setIsContactOpen(!isContactOpen) 

  const handleResume = () => {
    isFirstTime ? console.log("Good Choice 😀") : console.log()
    setIsFirstTime(false)
    setIsResumeOpen(!isResumeOpen)
  }

  return (
    <>
      {!isContactOpen && !isResumeOpen && (
        <div>
          <Element name="landing">
            <LadingPage
              className="pbxl"
              handleResume={handleResume}
              isFirstTime={isFirstTime}
            />
          </Element>
        </div>
      )}

      {!isContactOpen && isResumeOpen && (
        <div>
          <Element name="education">
            <Education
              handleResume={handleResume}
              handleContact={handleContact}
            />
          </Element>

          <Element name="projects">
            <Projects
              handleResume={handleResume}
              handleContact={handleContact}
            />
          </Element>

          <Element name="skills">
            <Skills handleResume={handleResume} handleContact={handleContact} />
          </Element>

          <Element name="experience">
            <Experience
              handleResume={handleResume}
              handleContact={handleContact}
            />
          </Element>
        </div>
      )}
      {isContactOpen && <ContactCard handleContact={handleContact} />}
    </>
  )
}

export default App

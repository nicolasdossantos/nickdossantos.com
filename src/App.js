import React, { useState } from 'react'
import './App.css'
import LadingPage from './components/LandingPage'
import Education from './components/Education'
import Skills from './components/Skills'
import Menu from './components/Menu'
import ContactCard from './components/ContactCard'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { Element } from 'react-scroll'
import { Zoom, Grid } from '@material-ui/core'
import NavigationBar from './components/NavigationBar'


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
      <NavigationBar />
      <Grid container>
        <Grid item xs={9}>
          <Education />
        </Grid>
        <Grid item xs={3}>
          <Menu />
        </Grid>
      </Grid>

      {/* {!isContactOpen && !isResumeOpen && (
        <Zoom timeout={400}  in={!isContactOpen && !isResumeOpen}>
        <div>
          <Element name="landing">
            <LadingPage
              className="pbxl"
              handleResume={handleResume}
              isFirstTime={isFirstTime}
            />
          </Element>
        </div>
        </Zoom>
      )}

      {!isContactOpen && isResumeOpen && (
        <Zoom timeout={400} in={!isContactOpen && isResumeOpen}>
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
        </Zoom>
      )}
      {isContactOpen && 
      <Zoom  timeout={900} style={{transitionDelay: '500ms'}} in={isContactOpen}>
        <ContactCard handleContact={handleContact} />
      </Zoom>} */}
    </>
  )
}

export default App

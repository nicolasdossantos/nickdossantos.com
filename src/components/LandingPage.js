import React from 'react'
import Typing from 'react-typing-animation'
import ContactTray from './ContactTray'
import { Link } from 'react-scroll'

export default function LadingPage({handleResume, isFirstTime}) {

  return (
    <div className="App">
      <ContactTray />
      <header className="landing-page">
        <img id="profile-pic" alt="profile" src="Nicolas.jpg" />
        <Typing>
          <div className="landing-page-text">
            Hi, I'm <span id="name">Nick dos Santos</span>,
            <Typing.Delay ms={200} />
            <br />
            Full Stack Software Engineer
          </div>
        </Typing>
        <Link to="education" spy={true} smooth={true}  duration={400}>
          <button className="btn btn-outline-secondary text-white body-text bold float-right" onClick={handleResume}>
            {isFirstTime ? "Go to Interactive Resume" : "Back to Interactive Resume"}
          </button>
        </Link>
      </header>
    </div>
  );
}

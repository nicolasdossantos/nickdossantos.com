import React from 'react'
import Typing from "react-typing-animation";
import ContactTray from './ContactTray'

export default function LadingPage() {
  return (
    <div className="App">
    <ContactTray/>
      <header className="landing-page">

        <img id="profile-pic" src="Nicolas.jpg" />
        <Typing>
          <div className="landing-page-text">
            Hi, I am <span id="name">Nick dos Santos</span>,
            <Typing.Delay ms={300} />
            <br />
            Full-stack software engineer
          </div>
        </Typing>
        <button className="btn btn-outline-secondary text-white">
          Go To Interactive Resume
        </button>
      </header>
    </div>
  );
}

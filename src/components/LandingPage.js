import React from "react";
import Typing from "react-typing-animation";
import ContactTray from "./ContactTray";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function LadingPage() {
  return (
    <div className="App">
      <ContactTray />
      <header className="landing-page">
        <img id="profile-pic" alt="profile" src="Nicolas.jpg" />
        <Typing>
          <div className="landing-page-text">
            Hi, I am <span id="name">Nick dos Santos</span>,
            <Typing.Delay ms={300} />
            <br />
            Full-stack software engineer
          </div>
        </Typing>
        <Link to="education" spy={true} smooth={true}  duration={400}>
          <button className="btn btn-outline-secondary text-white body-text bold float-right">
            Go To Interactive Resume
          </button>
        </Link>
      </header>
    </div>
  );
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faUserTie, faKeyboard, faTasks, faUniversity, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Menu({selected="", lastComponent="", handleContact, handleResume }) {
    return (
        <div className="menu container">
            <Link to="education" spy={true} smooth={true}  duration={500}>
                <div className={selected === "education" ? 'pbs selected pointer': 'pbs menuItem pointer' }>
                    <FontAwesomeIcon className="icon" icon={faUniversity} /> 
                        Education
                </div>
            </Link>
            <Link to="projects" spy={true} smooth={true}  duration={500}>
                <div className={selected === "projects" ? 'pbs selected pointer': 'pbs menuItem pointer' }>
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                        Projects
                    </div>
            </Link>
            <Link to="skills" spy={true} smooth={true}  duration={500}>
                <div className={selected === "skills" ? 'pbs selected pointer': 'pbs menuItem pointer' }>
                    <FontAwesomeIcon className="icon" icon={faKeyboard} /> 
                        Technical Skills
                </div>
            </Link>
            <Link to="experience" spy={true} smooth={true}  duration={500}>
                <div className={selected === "experience" ? 'pbs selected pointer': 'pbs menuItem pointer' }>
                    <FontAwesomeIcon className="icon" icon={faUserTie} /> 
                        Experience
                </div>
            </Link>
           
            <div onClick= {handleContact} className={selected === "contact" ? 'pbs selected pointer': 'menuItem pbs pointer' }>
                <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} /> 
                    Contact
            </div>
            <div onClick= {handleResume} className={selected === "contact" ? 'pbs selected pointer': 'pbs menuItem pointer' }>
                <FontAwesomeIcon className="icon" icon={faWindowClose} /> 
                    Close Resume
            </div>
           
        </div>
    )
}

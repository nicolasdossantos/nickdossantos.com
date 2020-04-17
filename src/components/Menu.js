import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faUserTie, faKeyboard, faTasks, faUniversity } from '@fortawesome/free-solid-svg-icons'

export default function Menu({selected=""}) {
    return (
        <div className="menu container">
            <div className={selected === "education" ? 'pbs selected': 'pbs' }><FontAwesomeIcon icon={faUniversity} /> Education</div>
            <div className={selected === "contact" ? 'pbs selected': 'pbs' }><FontAwesomeIcon icon={faTasks} /> Projects</div>
            <div className={selected === "skills" ? 'pbs selected': 'pbs' }><FontAwesomeIcon icon={faKeyboard} /> Technical Skills</div>
            <div className={selected === "contact" ? 'pbs selected': 'pbs' }><FontAwesomeIcon icon={faUserTie} /> Experience</div>
            <div className={selected === "contact" ? 'pbs selected': 'pbs' }><FontAwesomeIcon icon={faEnvelopeOpen} /> Contact</div>
        </div>
    )
}

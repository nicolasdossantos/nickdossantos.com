import React from 'react'
import { EmailIcon, LinkedinIcon, Git } from "react-share"

export default function ContactTray() {
    return (
        <div className="row">
        <EmailIcon></EmailIcon>
        <LinkedinIcon/>
        <div className="github-tile"><img src="gittile copy.jpg" width="64px"/></div>
            
        </div>
    )
}

import React from 'react'
import { EmailIcon, LinkedinIcon } from "react-share"

export default function ContactTray({size="default"}) {
    const width = size === "small" ? "50px" : "64px"
    return (
        <div className="row">
        <EmailIcon width={width}></EmailIcon>
        <LinkedinIcon width={width}/>
        {size === "small" && <img src="gittile copy.jpg" className="mts" width={width} height={width}/>}
        {size !== "small" && <img src="gittile copy.jpg" width={width} height={width}/>}
            
        </div>
    )
}

import React from 'react'
import { EmailIcon, LinkedinIcon } from 'react-share'

export default function ContactTray({ size = "default" }) {
  const width = size === "small" ? "50px" : "64px"
  return (
    <div className="row">
      <a href="mailto:contact@nickdossantos.com">
        <EmailIcon width={width}></EmailIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-ds/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon width={width} />
      </a>
      {size === "small" && (
        <a
          href="https://github.com/nicolasdossantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="gittile.jpg"
            alt="git"
            className="mts"
            width={width}
            height={width}
          />
        </a>
      )}
      {size !== "small" && (
        <a
          href="https://github.com/nicolasdossantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="gittile.jpg" alt="git" width={width} height={width} />
        </a>
      )}
    </div>
  )
}

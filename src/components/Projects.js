import React from 'react'
import Menu from './Menu'
import ProjectCard from './ProjectCard'

export default function Projects({ handleResume, handleContact }) {
  let hackgile = {
    name: 'HackGile',
    shortDescription: 'Agile Project Manager Tool for Hackathons and School Projects',
    image: 'hackgile.jpg',
    imageAlt: 'HackGileImage',
    role: 'Co-Creator',
    roleDescription: 'MEVN full stack developer, back-end focused',
    tech: ['vue', 'nodejs', 'mongodb'],
  }
  let mspi = {
    name: 'MSPi',
    shortDescription: 'A Raspberry Pi Smart Security Camera With Computer Vision Features',
    image: 'mspi.jpg',
    imageAlt: 'mspiImage',
    role: 'Co-Creator',
    roleDescription:
      'Python developer, computer vision focused',
    tech: ['python', 'vue', 'firebase'],
  }
  let hackgile3 = {
    name: 'HackGile+',
    shortDescription:
      'Agile Project Manager Tool for Hackathons and School Projects',
    image: 'hg3.jpg',
    imageAlt: 'hackgile',
    role: 'Co-Creator',
    roleDescription: 'Full stack React and FireBase developer',
    tech: ['react', 'firebase'],
  }
  return (
    <div className="App container ptl">
      <div className="title">Side Projects</div>
      <div className="subtitle">
        Here are some projects I have developed in my spare time
      </div>
      <div className="row ptl">
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              {" "}
              <ProjectCard project={hackgile} />{" "}
            </div>
            <div className="col-4">
              {" "}
              <ProjectCard project={mspi} />{" "}
            </div>
            <div className="col-4">
              {" "}
              <ProjectCard project={hackgile3} />{" "}
            </div>
          </div>
        </div>
        <div className="col-3">
          <Menu
            selected="projects"
            handleResume={handleResume}
            handleContact={handleContact}
          />
          <div id="findMore">
            <div className="">Find More</div>
            <div id="gitImage">
              <a
                href="https://github.com/nicolasdossantos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="githubContact.jpg" width="200px" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

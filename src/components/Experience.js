import React from 'react'
import Menu from './Menu'
import ExperienceCard from './ExperienceCard'

export default function Experience({ handleResume, handleContact }) {
  let wordPressPlugin = {
    name: 'WPaaS',
    shortDescription: 'WordPress as a Service.',
    image: 'wpaas.jpg',
    imageAlt: 'wordpress',
    role: 'Plugin Developer',
    roleDescription: 'Team\'s plugin developer',
    tech: ['react', 'firebase', 'nodejs'],
  }
  let splunk = {
    name: 'SaaS',
    shortDescription: 'Splunk as a service team.',
    image: 'spaas.jpg',
    imageAlt: 'splunk',
    role: 'Software Engineer',
    roleDescription: 'Splunk application engineer',
    tech: ['react', 'python', 'mongodb'],
  }

  let internshipProjects = [wordPressPlugin, splunk]

  let internShipExp = {
    title: 'Software Engineer Intern',
    company: 'Lockheed Martin',
    period: '05/2018 - 01/2020',
    accomplishments: ['', '', '', ''],
    logo: '/lm.jpg',
  }

  return (
    <div className="App container ptl">
      <div className="title">Professional Experience</div>
      <div className="row">
        <div className="col-9">
          <ExperienceCard
            experience={internShipExp}
            projects={internshipProjects}
          />
        </div>
        <div className="col-3">
          <Menu
            selected="experience"
            handleResume={handleResume}
            handleContact={handleContact}
          />
        </div>
      </div>
    </div>
  )
}

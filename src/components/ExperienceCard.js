import React from 'react'
import Hexagon from 'react-hexagon'
import ProjectCard from './ProjectCard'

export default function ExperienceCard({experience, projects}) {
    
    return (
        <>
            <div className="row pbs">
                <div className="col-1">
                    <Hexagon
                            style={{ stroke: "white" }}
                            backgroundImage={experience.logo}
                            className="experience"
                    />
                </div>
                <div className="subtitle ptd col-10 plxl">{experience.company} - {experience.title}<br/><p className="body-text">{experience.period}</p></div>
                
            </div>
            

            <div className="row">
              
                <div className="col-4 pld"><ProjectCard project={projects[0]} isProfessional={true}/></div>
                <div className="col-4"><ProjectCard project={projects[0]}  isProfessional={true}/></div>
                <div className="col-4"><ProjectCard project={projects[0]}  isProfessional={true}/></div>
            </div>

           


        </>
    )
}

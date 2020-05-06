import React from 'react'
import Hexagon from 'react-hexagon'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

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
                <div className="subtitle ptd col-11 plxl">{experience.company} - {experience.title}<br/><p className="body-text">{experience.period}</p></div>
                
            </div>
            <ReactTooltip
                id="all"
                place="top"
                type="dark"
                effect="float"
                multiline={true}
            />

            <div className="row">
              
                <div className="col-4 pld"><ProjectCard project={projects[0]} isProfessional={true}/></div>
                <div className="col-4"><ProjectCard project={projects[1]}  isProfessional={true}/></div>
                <div className="col-4"><ProjectCard project={projects[0]}  isProfessional={true}/></div>
            </div>
            <div className="row" style={{textAlign: "center"}}>
                       
                       <div className="title ptd col-6 pointer"  data-for="all" data-tip="Previous Experience" data-iscapture="true" onClick={()=>{}} >
                           <FontAwesomeIcon className="icon" icon={faArrowLeft} />
                       </div>
                
                   <div className="title ptd col-6 pointer" data-for="all" data-tip="Next Experience" data-iscapture="true" onClick={()=>{}}>
                   <FontAwesomeIcon className="icon" icon={faArrowRight} />
                   </div>
               </div>
            

           


        </>
    )
}

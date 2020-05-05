import React from "react";
import Hexagon from "react-hexagon";
import ReactTooltip from "react-tooltip";

export default function ProjectCard({ project = {}, isProfessional=false }) {
  return (
    <div className="projectCard">
      <div
        className="card"
        style={{ backgroundColor: "#6C757D", width: "16rem" }}
      >
        <div className="card-body">
          <div className="row">
            <h4 className="card-title bold col-7">{project.name}</h4>

            {project.tech.includes("vue") && (
              <a href="/#" data-for="all" data-tip="VueJS" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/vue.jpg"
                  className="skillsInCard "
                />
              </a>
            )}

            {project.tech.includes("nodejs") && (
              <a href="/#" data-for="all" data-tip="NodeJS" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/node.jpg"
                  className="skillsInCard"
                />
              </a>
            )}
            {project.tech.includes("mongodb") && (
              <a href="/#" data-for="all" data-tip="MongoDB" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/mongodb.jpg"
                  className="skillsInCard"
                />
              </a>
            )}
            {project.tech.includes("python") && (
              <a  href="/#" data-for="all" data-tip="Python" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/python.jpg"
                  className="skillsInCard"
                />
              </a>
            )}
            {project.tech.includes("firebase") && (
              <a data-for="all" href="/#" data-tip="Firebase" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/firebase.jpg"
                  className="skillsInCard"
                />
              </a>
            )}
            {project.tech.includes("react") && (
              <a data-for="all" href="/#" data-tip="React" data-iscapture="true">
                <Hexagon
                  style={{ stroke: "white" }}
                  backgroundImage="/react.jpg"
                  className="skillsInCard"
                />
              </a>
            )}
          </div>
          <div>{project.shortDescription}</div>
        </div>
        <img
          className="card-img-top"
          src={project.image}
          alt={project.imageAlt}
        />
        <div className="card-body">
          <h5 className="card-title bold">{project.role}</h5>
          <p className="card-text">{project.roleDescription}</p>
            {!isProfessional &&
              <div className="row">
                <button className="btn btn-outline-light text-black body-text-small bold mbs mrd ">
                  Website
                </button>
                <button className="btn btn-outline-light text-black body-text-small bold mbs">
                  Learn More
                </button>
                <div className="col-2"></div>
              </div>
            }
            {
              isProfessional &&
             
                <button className="btn btn-outline-light text-black body-text-small bold mbs mrd ">
                  See My Accomplishments
                </button>
               
             
            }
        </div>
      </div>
      <ReactTooltip
        id="all"
        place="top"
        type="dark"
        effect="float"
        multiline={true}
      />
    </div>
  );
}

import React from "react";
import Hexagon from "react-hexagon";

export default function ProjectCard({ project = {} }) {
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
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/vue.jpg"
                className="skillsInCard "
              />
            )}
            {project.tech.includes("nodejs") && (
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/node.jpg"
                className="skillsInCard"
              />
            )}
            {project.tech.includes("mongodb") && (
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/mongodb.jpg"
                className="skillsInCard"
              />
            )}
            {project.tech.includes("python") && (
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/python.jpg"
                className="skillsInCard"
              />
            )}
            {project.tech.includes("firebase") && (
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/firebase.jpg"
                className="skillsInCard"
              />
            )}
            {project.tech.includes("react") && (
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/react.jpg"
                className="skillsInCard"
              />
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
          <div className="row">
            <button className="btn btn-outline-light text-black body-text-small bold mbs mrd ">
              Website
            </button>
            <button className="btn btn-outline-light text-black body-text-small bold mbs">
              Learn More
            </button>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Hexagon from "react-hexagon";
import Menu from "./Menu";

export default function Skills() {
  return (
    <div className="App container">
      <div className="title">Skills</div>
      <div className="subtitle">
        Here I will describe how you use this oisoisjoijsoi hgsiuhsuhiu{" "}
      </div>

      <div className="row ptl">
        <div className="col-9">
          <div className="row pbl">
            <div className="col-1"></div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/kotlinhex.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/java.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/python copy.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/node copy.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/springboot copy.jpg"
                className="skills"
              />
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
          <div className="col-1"></div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/jscript.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/vue.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/react1.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/mysql copy.jpg"
                className="skills"
              />
            </div>
            <div className="col-2 skills">
              <Hexagon
                style={{ stroke: "white" }}
                backgroundImage="/mongodb.jpg"
                className="skills"
              />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="col-3">
          <Menu selected="skills" />
        </div>
      </div>
    </div>
  );
}

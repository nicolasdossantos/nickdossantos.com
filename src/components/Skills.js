import React from "react";
import Hexagon from "react-hexagon";
import Menu from "./Menu";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Skills({ handleResume, handleContact }) {
  const [skill, setSkill] = React.useState({
    skillName: "Kotlin",
    proficiency: 4.5,
    projects: ["Parts Visibility", "VPM"],
  });

  const popover = (
    <Popover id="popover-basic" className="pop">
      <Popover.Title as="h3" className="popOverTitle">
        <div className="bold">{skill.skillName}</div>
      </Popover.Title>
      <Popover.Content className="popOverBody container">
        <div className="row">
          <div className="col-6 bold">Proficiency:</div>
          <div className="stars col-6">
            {skill.proficiency === 5 && (
              <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </>
            )}
            {skill.proficiency === 4.5 && (
              <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </>
            )}
            {skill.proficiency === 4 && (
              <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </>
            )}
            {skill.proficiency === 3.5 && (
              <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </>
            )}
            {skill.proficiency === 3 && (
              <>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </>
            )}
          </div>
        </div>

        <div className="bold">Projects:&nbsp;</div>
        <ul>
          {skill.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <div className="App container">
        <div className="title col-9">Skills</div>

        <div className="subtitle">Click the tiles to learn more </div>

        <div className="row ptl">
          <div className="col-9">
            <div className="row pbl">
              <div className="col-1"></div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Kotlin",
                      proficiency: 4,
                      projects: ["Parts Visibility", "VPM"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/kotlinhex.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Java",
                      proficiency: 4.5,
                      projects: ["LM Wisdom"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/java.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={popover}
                  rootClose={true}
                  onEnter={() => {
                    setSkill({
                      skillName: "Python",
                      proficiency: 4.5,
                      projects: ["MSPi"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/python.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "NodeJS",
                      proficiency: 4,
                      projects: ["HackGile", "VPM"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/node.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Spring Boot",
                      proficiency: 3.5,
                      projects: ["Parts Visibility", "VPM"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/springboot.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row pbl">
              <div className="col-1"></div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Java Script",
                      proficiency: 4.5,
                      projects: [
                        "Parts Visibility",
                        "VPM",
                        "HackGile",
                        "MSPi",
                        "HackGile+",
                        "LM Wisdom",
                      ],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/jscript.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "VueJS",
                      proficiency: 4,
                      projects: ["HackGile", "MSPi"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/vue.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "ReactJS",
                      proficiency: 4.5,
                      projects: [
                        "HackGile+",
                        "Parts Visibility",
                        "Interactive Resume",
                        "VPM",
                      ],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/react.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Jest",
                      proficiency: 4,
                      projects: [
                        "Parts Visibility",
                        "VPM",
                        "Interactive Resume",
                      ],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/jesthex.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "Enzyme",
                      proficiency: 4,
                      projects: [
                        "Parts Visibility",
                        "VPM",
                        "Interactive Resume",
                      ],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/enzyme.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>

              <div className="col-1"></div>
            </div>
            <div className="row pbl">
              <div className="col-2"></div>

              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "JUnit",
                      proficiency: 4,
                      projects: ["LM Wisdom", "Parts Visibility", "VPM"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/junit.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={popover}
                  rootClose={true}
                  onEnter={() => {
                    setSkill({
                      skillName: "FireBase",
                      proficiency: 4.5,
                      projects: ["MSPi", "HackGile+", "Interactive Resume"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/firebase.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "MySQL",
                      proficiency: 4.5,
                      projects: ["Parts Visibility", "VPM"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/mysql.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2 skills">
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  rootClose={true}
                  overlay={popover}
                  onEnter={() => {
                    setSkill({
                      skillName: "MongoDB",
                      proficiency: 4,
                      projects: ["HackGile"],
                    });
                  }}
                >
                  <Hexagon
                    style={{ stroke: "white" }}
                    backgroundImage="/mongodb.jpg"
                    className="skills"
                  />
                </OverlayTrigger>
              </div>
              <div className="col-2"></div>
            </div>
          </div>

          <div className="col-3">
            <Menu selected="skills" handleResume={handleResume} handleContact={handleContact} />
          </div>
        </div>
      </div>
    </>
  );
}

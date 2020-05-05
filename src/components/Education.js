import React from "react";
import Hexagon from "react-hexagon";
import Menu from "./Menu";

export default function Education( {handleResume, handleContact} ) {
  return (
    <div className="App container">
      <div className="title pbl">Education</div>
      <div className="row body-text pll">
        <div className="col-2 ptd">
          <Hexagon
            style={{
              background: "norepeat",
              stroke: "white",
              strokeWidth: "5",
              width: "80px",
            }}
            backgroundImage="/tu.jpg"
            className="hex"
          />
        </div>
        <div className="col-7 ptxl">
          <ul>
            <li>Temple University - College of Science and Technology</li>
            <li>Bachelor of Science: Computer Science</li>
            <li>3.79 GPA (Cum Laude) | Dean's List</li>
          </ul>
        </div>
        <div className="col-3">
          <Menu selected="education"  handleResume={handleResume} handleContact={handleContact}/>
        </div>
      </div>
      <div className="subtitle pbd"> > Relevant Coursework</div>
      <div className="body-text">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Java I & II</li>
              <li>Web Application Dev</li>
              <li>Mobile Application Dev</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>Computer Systems</li>
              <li>Systems Programing</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>Database Management</li>
              <li>Discrete Math I,II & III</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

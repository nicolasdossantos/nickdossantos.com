import React from "react";
import "./App.css";

import LadingPage from "./components/LandingPage";
import Education from "./components/Education";
import Menu from "./components/Menu";
import Skills from "./components/Skills"

function App() {
  return (
    <>
    
   <LadingPage className="pbxl"/>
   <Education/> 
   <Skills />
  
   </>
  );
}

export default App;

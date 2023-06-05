import "../../style/left/projectsLeft.css";
import React, { useContext } from "react";
import TodoLeft from "../left/projects/TodoLeft";
import WeatherLeft from "../left/projects/WeatherLeft";
import CalculatorLeft from "../left/projects/CalculatorLeft";
import TicttLeft from "../left/projects/TicttLeft";
import { WebsiteContext } from "../../context/context";
function ProjectsLeft() {
  const { currentSection } = useContext(WebsiteContext);
  if (currentSection === "about") {
    return <TodoLeft id="about" />;
  }
  if (currentSection === "projectTwo") {
    return <WeatherLeft id="projectTwo" />;
  }
  if (currentSection === "projectThree") {
    return <CalculatorLeft id="projectThree" />;
  }
  if (currentSection === "projectFour") {
    return <TicttLeft id="projectFour" />;
  }
}

export default ProjectsLeft;
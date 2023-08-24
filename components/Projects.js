import React, { useEffect, useState } from "react";
import "../style/components.css";
import "../style/projects.css";

import TodoAppContent from "./projects/Todo";
import WeatherAppContent from "./projects/Weather";
import CalculatorAppContent from "./projects/Calculator";
import TicTacToeAppContent from "./projects/TicTacToe";
import { act } from "react-dom/test-utils";

function Projects() {
  const [content, setContent] = useState(<TodoAppContent />);
  const [activeProject, setActiveProject] = useState("todo"); // Initialize activeProject with a default value

  const ProjectTitles = () => {
    const projectItemClass = (item) => {
      return `projectTitleContainer ${activeProject === item ? "active" : ""}`;
    };

    const openContent = (component, className) => {
      setContent(component);
      setActiveProject(className);
    };

    return (
      <>
        <div
          className={projectItemClass("todo")}
          onClick={() => {
            openContent(<TodoAppContent />, "todo");
          }}>
          <div className="projectTitle">TODO</div>
        </div>

        <div
          className={projectItemClass("weather")}
          onClick={() => {
            openContent(<WeatherAppContent />, "weather");
          }}>
          <div className="projectTitle">WEATHER</div>
        </div>
        <div
          className={projectItemClass("calculator")}
          onClick={() => {
            openContent(<CalculatorAppContent />, "calculator");
          }}>
          <div className="projectTitle">CALCULATOR</div>
        </div>
        <div
          className={projectItemClass("tictactoe")}
          onClick={() => {
            openContent(<TicTacToeAppContent />, "tictactoe");
          }}>
          <div className="projectTitle">TICTACTOE</div>
        </div>
      </>
    );
  };

  return (
    <div className="componentWrapper">
      <div className="projectWrapper">
        <div className="leftSideWrapper">
          <ProjectTitles />
        </div>
        <div className="rightSideWrapper">
          <div className="contentWrapper">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

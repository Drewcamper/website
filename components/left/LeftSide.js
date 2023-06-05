import React, { useContext } from "react";
import AboutLeft from "./AboutLeft";
import ContactsLeft from "./ContactsLeft";
import TodoLeft from "./projects/TodoLeft";
import WeatherLeft from "./projects/WeatherLeft";
import CalculatorLeft from "./projects/CalculatorLeft";
import TicttLeft from "./projects/TicttLeft";

import { WebsiteContext } from "../../context/context";

function LeftSide() {
  const { currentSection } = useContext(WebsiteContext);

  if (currentSection === "about") {
    return (
      <div className="leftSide">
        <AboutLeft />
      </div>
    );
  }
  if (currentSection === "projectOne" || currentSection === "projects") {
    return (
      <div className="leftSide">
        <TodoLeft id="projectOne" />
      </div>
    );
  }
  if (currentSection === "projectTwo") {
    return (
      <div className="leftSide">
        <WeatherLeft id="projectTwo" />
      </div>
    );
  }
  if (currentSection === "projectThree") {
    return (
      <div className="leftSide">
        <CalculatorLeft id="projectThree" />
      </div>
    );
  }
  if (currentSection === "projectFour") {
    return (
      <div className="leftSide">
        <TicttLeft id="projectFour" />
      </div>
    );
  }
  if (currentSection === "contacts") {
    return (
      <div className="leftSide">
        <ContactsLeft id="contacts" />{" "}
      </div>
    );
  }
}

export default LeftSide;

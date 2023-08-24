import React from "react";
import calculator from "../../images/projects/calculatorbg.png";

const CalculatorAppContent = () => {
  return (
    <div>
      <div className="upperWrapper">
        <div className="description">
          Introducing a simple yet powerful calculator for everyday calculations. This project
          showcases basic arithmetic operations with a clean and intuitive design. Perform quick and
          accurate calculations with ease. Experience the convenience of this essential calculator
          for all your everyday mathematical needs.
        </div>
        <div className="projectImageWrapper">
          <img src={calculator} className="projectImage"></img>
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="demoButton">
          <a href="https://calculator.korosiandras.com/" target="_blank">
            DEMO
          </a>
        </div>
        <div className="codeButton">
          <a href="https://github.com/Drewcamper/calculator" target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default CalculatorAppContent;

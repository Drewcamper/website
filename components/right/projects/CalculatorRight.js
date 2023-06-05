import React, { forwardRef } from "react";
import "../../../style/right/projectsRight.css";

const CalculatorRight = forwardRef((props, ref) => (
  <div ref={ref} id="projectThree" className="rightSidePanels">
    <div className="btntextbox">
      <div className="explanation">Calculator</div>
      <p className="description">
        Introducing a simple yet powerful calculator for everyday calculations. This project
        showcases basic arithmetic operations with a clean and intuitive design. Perform quick and
        accurate calculations with ease. Experience the convenience of this essential calculator for
        all your everyday mathematical needs.
      </p>

      <a
        className="codeBtn viewCode"
        href="https://github.com/Drewcamper/calculator"
        target="_blank"
        rel="noreferrer">
        DEMO
      </a>

      <a
        className="codeBtn tryDemo"
        href="https://calculator.korosiandras.com"
        target="_blank"
        rel="noreferrer">
        CODE
      </a>
    </div>
  </div>
));

export default CalculatorRight;

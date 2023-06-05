import React, { forwardRef } from "react";
import "../../../style/right/projectsRight.css";

const TicttRight = forwardRef((props, ref) => (
  <div ref={ref} id="projectFour" className="rightSidePanels">
    <div className="explanation">Tic-Tac-Toe</div>
    <p className="description">
      Time for some fun! The Tic-Tac-Toe Game is a delightful project that allowed me to practice
      fundamental concepts such as React Hooks, loops, and conditional (ternary) operators. This
      game not only challenges players strategically but also brings joy and balance by ensuring a
      non-zero-sum outcome. Experience the thrill of this classic game as you strive for victory
      without losing the enjoyment of gameplay. Get ready to put your skills to the test and enjoy
      moments of friendly competition!
    </p>
    <a
      className="codeBtn viewCode"
      href="https://github.com/Drewcamper/tic-tac-toe"
      target="_blank"
      rel="noreferrer">
      CODE
    </a>
    <a
      className="codeBtn tryDemo"
      href="https://tic-tac-toe.korosiandras.com/"
      target="_blank"
      rel="noreferrer">
      DEMO
    </a>
  </div>
));

export default TicttRight;

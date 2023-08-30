import React, { useState } from "react";
import ticTacToe from "../../images/projects/tic-tac-toe.png";
import ticTacToeSmall from "../../images/smallSize/projects/tic-tac-toe.png";
const TicTacToeAppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <div className="upperWrapper">
        <div className="description">
          Time for some fun! The Tic-Tac-Toe Game is a delightful project that allowed me to
          practice fundamental concepts such as React Hooks, loops, and conditional (ternary)
          operators. This game not only challenges players strategically but also brings joy and
          balance by ensuring a non-zero-sum outcome. Experience the thrill of this classic game as
          you strive for victory without losing the enjoyment of gameplay. Get ready to put your
          skills to the test and enjoy moments of friendly competition!
        </div>
        <div className="projectImageWrapper">
          {isLoading ? (
            <img
              src={ticTacToeSmall}
              className="projectImage"
              loading="lazy"
              onLoad={handleImageLoad}></img>
          ) : (
            <img src={ticTacToe} className="projectImage" loading="lazy"></img>
          )}
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="demoButton">
          <a href="https://tic-tac-toe.korosiandras.com/" target="_blank">
            DEMO
          </a>
        </div>
        <div className="codeButton">
          <a href="https://github.com/Drewcamper/tic-tac-toe" target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};
export default TicTacToeAppContent;

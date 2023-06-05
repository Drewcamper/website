import React from "react";
import "../../style/left/aboutLeft.css";
import pp from '../../images/pp.jpeg'
function AboutLeft() {
  return (
    <div className="aboutLeft">
      <img src={pp} className="ppImage" alt="Profile Picture"></img>
    </div>
  );
}

export default AboutLeft;

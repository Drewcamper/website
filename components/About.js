import React from "react";
import "../style/components.css";
import "../style/about.css";
import pp from "../images/pp.jpeg";

function About() {
  return (
    <div className="componentWrapper">
      <div className="aboutWrapper">
        <div className="pictureWrapper">
          <img src={pp} className="ppImage" alt="Profile Picture"></img>
          <div className="name">András Kőrösi</div>
        </div>

        <div className="introductionWrapper">
          <div className="introduction">
            Welcome! I'm a self-taught React developer who dives into complex problems with joy and
            crafts new, useful solutions that make people's lives easier. I'm always eager to learn
            new skills, making my code more efficient and readable. While I strive for perfection,
            the Enso sign reminds me of the balance. With a creative mindset and a passion for
            continuous learning, I'm dedicated to delivering exceptional user experiences. Let's
            make our ideas into reality!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

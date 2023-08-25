import React from "react";
import "../style/components.css";
import "../style/about.css";
import pp from "../images/pp.jpg";

function About() {
  return (
    <div className="componentWrapper">
      <div className="aboutWrapper">
        <div className="leftSideWrapper">
          <div className="profileWrapper">
            <div className="profilePictureWrapper">
              <img src={pp} className="profilePicture" alt="Profile Picture"></img>
            </div>
            <div className="name">András Kőrösi</div>
          </div>
        </div>
        <div className="rightSideWrapper">
          <div className="introductionWrapper">
            <div className="introduction">
              Welcome! I'm a self-taught React developer who dives into complex problems with joy
              and crafts new, useful solutions that make people's lives easier. I'm always eager to
              learn new skills, making my code more efficient and readable. While I strive for
              perfection, the Enso sign reminds me of the balance. With a creative mindset and a
              passion for continuous learning, I'm dedicated to delivering exceptional user
              experiences. Let's make our ideas into reality!
            </div>
          </div>
          <div className="toolsWrapper">
            Tools I have worked with:
            <div className="tools firstTool">JavaScript</div>
            <div className="tools">React</div>
            <div className="tools">Firebase</div>
            <div className="tools">GitHub</div>
            <div className="tools">Stripe</div>
            <div className="tools">Jest</div>
            <div className="tools">npm</div>
            <div className="tools">.env</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

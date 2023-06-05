import React, { forwardRef } from "react";
import "../../style/right/aboutRight.css";

const AboutRight = forwardRef((props, ref) => (
  <div ref={ref} id="about" className="aboutRight">
    <div className="About_Page">
      <div className="introduceWrapper">
        <div className="introducing fade-in">Kőrösi András</div>
      </div>
      <div className="jobTitle fade-in-delay">front-end developer</div>
      <div className="about">
        Welcome! I'm a self-taught React developer who dives into complex problems with joy and
        crafts new, useful solutions that make people's lives easier. I'm always eager to learn new
        skills, making my code more efficient and readable. While I strive for perfection, the Enso
        sign reminds me of the balance. With a creative mindset and a passion for continuous
        learning, I'm dedicated to delivering exceptional user experiences. Let's make our ideas
        into reality!
      </div>
    </div>
    <div className="line"></div>
  </div>
));

export default AboutRight;

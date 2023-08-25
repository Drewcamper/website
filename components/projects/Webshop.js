import React from "react";
import webshop from "../../images/projects/webshop.png";
function WebshopAppContent() {
  return (
    <div>
      <div className="upperWrapper">
        <div className="description">
          Step into "Colorful Shapes," a React webshop showcasing my skills. Discover vibrant
          colors, shapes, and secure user authentication. While Stripe integration awaits,
          experience seamless navigation and responsive design. Engage with a built-in chat for
          customer service. An ongoing project that underlines my innovative approach to web
          development.
        </div>
        <div className="projectImageWrapper">
          <img alt="index image" src={webshop} className="projectImage"></img>
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="demoButton">
          <a href="https://webshop.korosiandras.com/" target="_blank">
            DEMO
          </a>
        </div>
        <div className="codeButton">
          <a href="https://github.com/Drewcamper/realWebshop" target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebshopAppContent;

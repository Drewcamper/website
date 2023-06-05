import React, { forwardRef } from "react";
import "../../../style/right/projectsRight.css";

const WeatherRight = forwardRef((props, ref) => (
  <div ref={ref} id="projectTwo" className="rightSidePanels">
    <div className="explanation">Weather App</div>
    <p className="description">
      Weather forecast application utilizing the OpenWeatherMap API to provide real-time weather
      data for any location. Throughout the development process, I gained valuable experience in
      fetching data from external APIs, implementing error handling for seamless user experience,
      and securing sensitive information by loading environment variables from a dotenv file. The
      application offers current weather conditions and detailed forecasts for the upcoming days.
    </p>
    <a
      className="codeBtn viewCode"
      href="https://github.com/Drewcamper/weather-app"
      target="_blank"
      rel="noreferrer">
      CODE
    </a>
    <a
      className="codeBtn tryDemo"
      href="https://weather.korosiandras.com"
      target="_blank"
      rel="noreferrer">
      DEMO
    </a>
  </div>
));

export default WeatherRight;

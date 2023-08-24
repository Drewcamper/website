import React from 'react'
import weather from '../../images/projects/weather.png'


const WeatherAppContent = () => {
    return (
      <div>
        <div className="upperWrapper">
          <div className="description">
            Weather forecast application utilizing the OpenWeatherMap API to provide real-time
            weather data for any location. Throughout the development process, I gained valuable
            experience in fetching data from external APIs, implementing error handling for seamless
            user experience, and securing sensitive information by loading environment variables
            from a dotenv file. The application offers current weather conditions and detailed
            forecasts for the upcoming days.
          </div>
          <div className="projectImageWrapper">
            <img src={weather} className="projectImage"></img>
          </div>
        </div>
        <div className="buttonWrapper">
        <div className="demoButton">
          <a href="https://weather.korosiandras.com/" target="_blank">
            DEMO
          </a>
        </div>
        <div className="codeButton">
          <a href="https://github.com/Drewcamper/weather-app" target="_blank">
            CODE
          </a>
        </div>
      </div>
      </div>
    );
  };
export default WeatherAppContent
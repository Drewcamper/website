import weatherPP from "../../../images/projects/weather.png";
import '../../../style/left/projectsLeft.css'

function WeatherLeft() {
  return (
    <div className="projectsLeft weather"> <a
    className="items"
    href="https://weather.korosiandras.com"
    target="_blank"
    rel="noreferrer"
  >
    <div>
      <img
        className="projectPicture"
        src={weatherPP}
        alt="Weather App"
      ></img>
    </div>
  </a></div>
  )
}

export default WeatherLeft
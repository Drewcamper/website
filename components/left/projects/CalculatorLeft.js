import calculatorPP from "../../../images//projects/calculatorbg.png";
import '../../../style/left/projectsLeft.css'
function CalculatorLeft() {
  return (
    <div className="projectsLeft calculator">
      <a
        className="items"
        href="https://calculator.korosiandras.com"
        target="_blank"
        rel="noreferrer">
        <div>
          <img className="projectPicture" src={calculatorPP} alt="calculator"></img>
        </div>
      </a>
    </div>
  );
}

export default CalculatorLeft;

import tictactoePP from "../../../images/projects/tic-tac-toe.png";
import '../../../style/left/projectsLeft.css'


function TicttLeft() {
  return (
    <div className="projectsLeft ttt">
      <a
        className="items"
        href="https://tic-tac-toe.korosiandras.com/"
        target="_blank"
        rel="noreferrer">
        <div>
          <img className="projectPicture" src={tictactoePP} alt="tic-tac-toe"></img>
        </div>
      </a>
    </div>
  );
}

export default TicttLeft;

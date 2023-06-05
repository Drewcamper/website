import todoPP from "../../../images/projects/todo.png";
import '../../../style/left/projectsLeft.css'

function TodoLeft() {
  return (
    <div className="projectsLeft todo">
      <a href="https://todo.korosiandras.com" target="_blank" rel="noreferrer">
        <div>
          <img className="projectPicture" src={todoPP} alt="Todo App"></img>
        </div>
      </a>
    </div>
  );
}

export default TodoLeft;

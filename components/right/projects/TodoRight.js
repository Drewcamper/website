import React, { forwardRef } from "react";
import "../../../style/right/projectsRight.css";
const TodoRight = forwardRef((props, ref) => (
  <div ref={ref} id="projects" className="rightSidePanels">
    <div className="explanation">Todo App</div>
    <p className="description">
      A clean and efficient Todo App designed to streamline task management. This project showcases
      my proficiency in utilizing React Hooks and UUID for state management, allowing for seamless
      handling of notes and assigning unique IDs to each task. The integration of Material-UI
      enhances the user experience by providing a visually appealing and user-friendly interface.
      Experience the simplicity and effectiveness of this Todo App as you organize and prioritize
      your tasks with ease.
    </p>
    <a
      className="codeBtn viewCode"
      href="https://github.com/Drewcamper/todo-app"
      target="_blank"
      rel="noreferrer">
      CODE
    </a>
    <a
      className="codeBtn tryDemo"
      href="https://todo.korosiandras.com"
      target="_blank"
      rel="noreferrer">
      DEMO
    </a>
  </div>
));

export default TodoRight;

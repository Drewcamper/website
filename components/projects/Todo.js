import React, { useState } from "react";
import todo from "../../images/projects/todo.png";
import todoSmall from "../../images/smallSize/projects/todo.png";

const TodoAppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <div className="upperWrapper">
        <div className="description">
          A clean and efficient Todo App designed to streamline task management. This project
          showcases my proficiency in utilizing React Hooks and UUID for state management, allowing
          for seamless handling of notes and assigning unique IDs to each task. The integration of
          Material-UI enhances the user experience by providing a visually appealing and
          user-friendly interface. Experience the simplicity and effectiveness of this Todo App as
          you organize and prioritize your tasks with ease.
        </div>
        <div className="projectImageWrapper">
          {isLoading ? (
            <img
              alt="index image"
              src={todoSmall}
              className="projectImage"
              loading="lazy"
              onLoad={handleImageLoad}></img>
          ) : (
            <img alt="index image" src={todo} className="projectImage" loading="lazy"></img>
          )}
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="demoButton">
          <a href="https://todo.korosiandras.com/" target="_blank">
            DEMO
          </a>
        </div>
        <div className="codeButton">
          <a href="https://github.com/Drewcamper/todo-app" target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};
export default TodoAppContent;

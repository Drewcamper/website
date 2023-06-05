import React, { useContext } from "react";
import { WebsiteContext } from "../../context/context";
import "../../style/right/menu.css";
const Menu = () => {
  const { setCurrentSection } = useContext(WebsiteContext);

  return (
    <div className="menuContainer">
      <button onClick={() => setCurrentSection("about")}>About</button>
      <button onClick={() => setCurrentSection("projects")}>Projects</button>
      <button onClick={() => setCurrentSection("contacts")}>Contact</button>
    </div>
  );
};
export default Menu;

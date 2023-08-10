import React, { useContext } from "react";
import { WebsiteContext } from "../context/context";
import '../style/menu.css'

function Menu() {
  const { setMainComponent } = useContext(WebsiteContext);

  const handleComponentChange = (componentName) => {
    setMainComponent(componentName);
  };

  return (
    <div className="menuWrapper">
      <div className="menuTitles" onClick={() => handleComponentChange("about")}>
        about
      </div>
      <div className="menuTitles" onClick={() => handleComponentChange("projects")}>
        project
      </div>
      <div className="menuTitles" onClick={() => handleComponentChange("contacts")}>
        contact
      </div>
    </div>
  );
}

export default Menu;

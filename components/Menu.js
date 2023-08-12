import React, { useContext, useState } from "react";
import { WebsiteContext } from "../context/context";
import '../style/menu.css'

function Menu() {
  const { setMainComponent } = useContext(WebsiteContext);
  const [activeItem, setActiveItem] = useState(null);

  const handleComponentChange = (componentName) => {
    setMainComponent(componentName);
    setActiveItem(componentName); // Set the clicked item as active
  };

  const menuItemClass = (item) => {
    return `menuTitles ${activeItem === item ? "active" : ""}`;
  };

  return (
    <div className="menuWrapper">
      <div className={menuItemClass("about")} onClick={() => handleComponentChange("about")}>
        about
      </div>
      <div className={menuItemClass("projects")} onClick={() => handleComponentChange("projects")}>
        project
      </div>
      <div className={menuItemClass("contacts")} onClick={() => handleComponentChange("contacts")}>
        contact
      </div>
    </div>
  );
}

export default Menu;

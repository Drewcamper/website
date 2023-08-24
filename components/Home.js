import React, { useContext } from "react";
import "../style/home.css";
import { WebsiteContext } from "../context/context";
import Menu from "./Menu";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";

function Home() {
  const ComponentRenderer = () => {
    const { mainComponent } = useContext(WebsiteContext);

    let componentToRender;

    switch (mainComponent) {
      case "about":
        componentToRender = <About />;
        break;
      case "projects":
        componentToRender = <Projects />;
        break;
      case "contacts":
        componentToRender = <Contacts />;
        break;
      default:
        componentToRender = null;
    }
    return <>{componentToRender}</>;
  };

  return (
    <>
      <ComponentRenderer />
      <Menu />
    </>
  );
}

export default Home;

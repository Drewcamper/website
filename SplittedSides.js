import React from "react";
import "./style/splittedSides.css";
import Menu from "./components/right/Menu";
import LeftSide from "./components/left/LeftSide";
import RightSide from "./components/right/RightSide";

const SplittedSides = () => {
  return (
    <div className="appWrapper">
      <LeftSide />
      <RightSide />
      <Menu />
    </div>
  );
};

export default SplittedSides;

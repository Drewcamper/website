import React from "react";
import { WebsiteProvider } from "./context/context";
import "./index.css";
import SplittedSides from "./SplittedSides";
function App() {
  return (
    <WebsiteProvider>
      <SplittedSides />
    </WebsiteProvider>
  );
}

export default App;
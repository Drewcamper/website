import React from "react";
import { WebsiteProvider } from "./context/context";
import "./index.css";
import Home from "./components/Home";
function App() {
  return (
    <WebsiteProvider>
      <Home />
    </WebsiteProvider>
  );
}

export default App;

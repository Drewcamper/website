import React, { createContext, useState } from "react";

export const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("about");

  return (
    <WebsiteContext.Provider
      value={{
        currentSection,
        setCurrentSection,
      }}>
      {children}
    </WebsiteContext.Provider>
  );
};

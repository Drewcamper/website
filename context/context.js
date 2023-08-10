import React, { createContext, useState } from "react";

export const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
  const [mainComponent, setMainComponent] = useState('about');

  return (
    <WebsiteContext.Provider
      value={{
        mainComponent,
        setMainComponent,
      }}>
      {children}
    </WebsiteContext.Provider>
  );
};

import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("ES");
  const [area, setArea] = useState(["Programming", "Mechanics"]);
  return (
    <AppContext.Provider value={{ lang, setLang, area, setArea }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

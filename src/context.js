import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("ES");
  const [area, setArea] = useState(["programming", "mechanics"]);
  const [fields, setFields] = useState(["experience", "education", "skills"]);
  return (
    <AppContext.Provider
      value={{ lang, setLang, area, setArea, fields, setFields }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

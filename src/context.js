import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("ES");
  const [area, setArea] = useState(["programming", "mechanics", "school"]);
  const [fields, setFields] = useState(["experience", "education", "skills"]);
  const [skills, setSkills] = useState([
    "programming language",
    "framework",
    "database",
    "vcs",
  ]);
  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        area,
        setArea,
        fields,
        setFields,
        skills,
        setSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

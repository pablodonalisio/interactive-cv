import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("ES");
  const [fields, setFields] = useState([
    "about",
    "experience",
    "education",
    "skills",
  ]);
  const [hiddenElements, setHiddenElements] = useState([]);

  useEffect(() => {
    const toggleElements = (e) => {
      hiddenElements.forEach((element) => {
        if (!element) return;
        if (e.type === "mouseout") element.classList.add("hidden");
        if (e.type === "mouseover") element.classList.remove("hidden");
      });
    };
    const curriculum = document.getElementById("curriculum");
    curriculum.addEventListener("mouseout", toggleElements);
    curriculum.addEventListener("mouseover", toggleElements);
    return () => {
      curriculum.removeEventListener("mouseout", toggleElements);
      curriculum.removeEventListener("mouseover", toggleElements);
    };
  }, [hiddenElements]);
  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        fields,
        setFields,
        hiddenElements,
        setHiddenElements,
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

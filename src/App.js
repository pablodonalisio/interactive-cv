import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("ES");
  const changeLanguage = () => {
    const lang = language === "EN" ? "ES" : "EN";
    setLanguage(lang);
  };
  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <div id="curriculum">
          <SideInfo />
          <Main />
        </div>
      </LanguageContext.Provider>
      <button onClick={changeLanguage} id="lang">
        {language}
      </button>
    </div>
  );
}

export default App;

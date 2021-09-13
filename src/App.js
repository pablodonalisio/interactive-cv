import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { AreaContext } from "./AreaContext";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("ES");
  const [area, setArea] = useState("Programming");

  const changeLanguage = () => {
    const lang = language === "EN" ? "ES" : "EN";
    setLanguage(lang);
  };

  const changeArea = (e) => {
    e.target.parentElement
      .getElementsByClassName("active")[0]
      .classList.toggle("active");
    e.target.classList.add("active");
    setArea(e.target.innerHTML);
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <AreaContext.Provider value={area}>
          <div id="curriculum">
            <SideInfo />
            <Main />
          </div>
        </AreaContext.Provider>
      </LanguageContext.Provider>
      <div className="settings">
        <p>Select language</p>
        <button onClick={changeLanguage} id="lang">
          {language}
        </button>
        <p>Select area</p>
        <button className="active" onClick={changeArea}>
          Programming
        </button>
        <button onClick={changeArea}>Mechanics</button>
      </div>
    </div>
  );
}

export default App;

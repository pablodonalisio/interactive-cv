import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { AreaContext } from "./AreaContext";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("ES");
  const [area, setArea] = useState("Programming");

  const changeActiveButton = (e) => {
    e.target.parentElement
      .getElementsByClassName("active")[0]
      .classList.toggle("active");
    e.target.classList.add("active");
  };

  const changeLanguage = (e) => {
    changeActiveButton(e);
    setLanguage(e.target.innerHTML);
  };

  const changeArea = (e) => {
    changeActiveButton(e);
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
        <div>
          <p>Select language</p>
          <button className="active" onClick={changeLanguage}>
            ES
          </button>
          <button onClick={changeLanguage}>EN</button>
        </div>
        <div>
          <p>Select area</p>
          <button className="active" onClick={changeArea}>
            Programming
          </button>
          <button onClick={changeArea}>Mechanics</button>
        </div>
      </div>
    </div>
  );
}

export default App;

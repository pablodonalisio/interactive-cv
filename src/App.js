import { useState } from "react";
import { LanguageContext } from "./context";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("ES");

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

  return (
    <div className="App">
      <div id="curriculum">
        <SideInfo />
        <Main />
      </div>
      <div className="settings">
        <div>
          <p>Select language</p>
          <button className="active" onClick={changeLanguage}>
            ES
          </button>
          <button onClick={changeLanguage}>EN</button>
        </div>
      </div>
    </div>
  );
}

export default App;

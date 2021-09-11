import { useState } from "react";
import "./App.css";
import SideInfo from "./components/SideInfo/SideInfo";
import Main from "./components/Main/Main";

function App() {
  const [language, setLanguage] = useState("EN");
  const changeLanguage = () => {
    const lang = language === "EN" ? "ES" : "EN";
    setLanguage(lang);
  };
  return (
    <div className="App">
      <div id="curriculum">
        <SideInfo />
        <Main />
      </div>
      <button onClick={changeLanguage} id="lang">
        {language}
      </button>
    </div>
  );
}

export default App;

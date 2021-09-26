import React from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";

function SettingsPanel() {
  const { setLang } = useGlobalContext();
  const changeActiveButton = (e) => {
    e.target.parentElement
      .getElementsByClassName("active")[0]
      .classList.toggle("active");
    e.target.classList.add("active");
  };

  const changeLanguage = (e) => {
    changeActiveButton(e);
    setLang(e.target.value);
  };
  return (
    <div className="settings-panel">
      <div>
        <p>Select language</p>
        <button className="active" onClick={changeLanguage} value="ES">
          ES
        </button>
        <button onClick={changeLanguage} value="EN">
          EN
        </button>
      </div>
    </div>
  );
}

export default SettingsPanel;

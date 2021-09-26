import React from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";

const data = {
  ES: {
    langTitle: "Seleccione un idioma",
  },
  EN: {
    langTitle: "Select language",
  },
};
function SettingsPanel() {
  const { lang, setLang } = useGlobalContext();
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
      <div className="settings-box">
        <h2>{data[lang].langTitle}</h2>
        <div className="btn-container">
          <button
            className=" settings-btn active"
            onClick={changeLanguage}
            value="ES"
          >
            ES
          </button>
          <button className="settings-btn" onClick={changeLanguage} value="EN">
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;

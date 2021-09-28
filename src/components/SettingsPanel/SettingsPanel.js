import React, { useState, useEffect } from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";
import SettingsBox from "./SettingsBox";
import { data } from "./Data";

function SettingsPanel() {
  const { lang, setLang } = useGlobalContext();
  const [showSettings, setShowSettings] = useState(false);
  const [cvYOffset, setCvYOffset] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const cv = document.getElementById("curriculum");
      const yOffset = cv.getBoundingClientRect().top;
      yOffset < 0 ? setCvYOffset(Math.abs(yOffset)) : setCvYOffset(0);
    });
  }, []);
  return (
    <div className="settings-container" style={{ top: cvYOffset }}>
      <button
        className="menu-btn"
        onClick={() => setShowSettings(!showSettings)}
      >
        <i className="fas fa-bars"></i>
      </button>
      {showSettings && (
        <div className="settings-panel">
          <SettingsBox
            data={data[lang].lang}
            setValue={setLang}
            type="select"
          />
        </div>
      )}
    </div>
  );
}

export default SettingsPanel;

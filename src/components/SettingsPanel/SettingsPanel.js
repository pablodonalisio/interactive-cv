import React, { useState, useEffect, useRef } from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";

function SettingsPanel() {
  const { lang, setLang, setHiddenElements } = useGlobalContext();
  const [showSettings, setShowSettings] = useState(false);
  const [cvYOffset, setCvYOffset] = useState(0);
  const settingsContainer = useRef("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const cv = document.getElementById("curriculum");
      const yOffset = cv.getBoundingClientRect().top;
      yOffset < 0 ? setCvYOffset(Math.abs(yOffset)) : setCvYOffset(0);
    });
  }, []);
  useEffect(() => {
    setHiddenElements((prev) => [...prev, settingsContainer.current]);
  }, [setHiddenElements]);
  return (
    <div
      className="settings-container hidden"
      style={{ top: cvYOffset }}
      ref={settingsContainer}
    >
      <button
        className="menu-btn"
        onClick={() => setShowSettings(!showSettings)}
      >
        <i className="fas fa-bars"></i>
      </button>
      {showSettings && (
        <div className="settings-panel">
          <div className="settings-box">
            <h2>{lang === "ES" ? "Idioma" : "Language"}</h2>
            <select
              name="lang"
              id="lang"
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="ES">ES</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsPanel;

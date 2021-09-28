import React, { useState, useEffect, useRef } from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";
import SettingsBox from "./SettingsBox";
import { data } from "./Data";

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

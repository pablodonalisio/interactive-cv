import React from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";
import SettingsBox from "./SettingsBox";

const data = {
  ES: {
    areaTitle: "Seleccione un area",
    lang: {
      title: "seleccione un idioma",
      options: [
        { value: "ES", active: true },
        { value: "EN", active: false },
      ],
    },
  },
  EN: {
    areaTitle: "Select area",
    lang: {
      title: "select language",
      options: [
        { value: "ES", active: true },
        { value: "EN", active: false },
      ],
    },
  },
};
function SettingsPanel() {
  const { lang, setLang } = useGlobalContext();
  return (
    <div className="settings-panel">
      <SettingsBox data={data[lang].lang} setValue={setLang} />
      <hr />
      <div className="settings-box">
        <h2>{data[lang].areaTitle}</h2>
      </div>
    </div>
  );
}

export default SettingsPanel;

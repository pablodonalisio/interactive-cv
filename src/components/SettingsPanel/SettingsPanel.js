import React from "react";
import "./SettingsPanel.css";
import { useGlobalContext } from "../../context";
import SettingsBox from "./SettingsBox";

const data = {
  ES: {
    lang: {
      title: "seleccione un idioma",
      options: [
        { value: "ES", active: true },
        { value: "EN", active: false },
      ],
    },
    area: {
      title: "seleccione un área",
      options: [
        { value: "programming", text: "Programación", active: true },
        { value: "mechanics", text: "Mecánica", active: true },
      ],
    },
  },
  EN: {
    lang: {
      title: "select language",
      options: [
        { value: "ES", active: true },
        { value: "EN", active: false },
      ],
    },
    area: {
      title: "select area",
      options: [
        { value: "programming", text: "Programming", active: true },
        { value: "mechanics", text: "Mechanics", active: true },
      ],
    },
  },
};
function SettingsPanel() {
  const { lang, setLang, setArea } = useGlobalContext();
  return (
    <div className="settings-panel">
      <SettingsBox data={data[lang].lang} setValue={setLang} />
      <hr />
      <SettingsBox data={data[lang].area} setValue={setArea} />
    </div>
  );
}

export default SettingsPanel;

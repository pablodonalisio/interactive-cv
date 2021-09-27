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
    fields: {
      title: "seleccione los campos",
      options: [
        { value: "about", text: "Sobre Mi", active: false },
        { value: "experience", text: "Experiencia", active: true },
        { value: "education", text: "Educación", active: true },
        { value: "skills", text: "Herramientas", active: true },
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
    fields: {
      title: "select fields",
      options: [
        { value: "about", text: "About Me", active: false },
        { value: "experience", text: "Experience", active: true },
        { value: "education", text: "Education", active: true },
        { value: "skills", text: "Skills", active: true },
      ],
    },
  },
};
function SettingsPanel() {
  const { lang, setLang, setArea, setFields } = useGlobalContext();
  return (
    <div className="settings-panel">
      <SettingsBox data={data[lang].lang} setValue={setLang} type="select" />
      <hr />
      <SettingsBox data={data[lang].area} setValue={setArea} type="combo" />
      <hr />
      <SettingsBox data={data[lang].fields} setValue={setFields} type="combo" />
    </div>
  );
}

export default SettingsPanel;

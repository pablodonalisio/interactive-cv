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
        { value: "school", text: "Colegio", active: true },
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
    skills: {
      title: "seleccione herramientas",
      options: [
        {
          value: "programming language",
          text: "Lenguajes",
          active: true,
        },
        { value: "framework", text: "Framework", active: true },
        { value: "database", text: "Base de datos", active: true },
        { value: "vcs", text: "Control de version", active: true },
        { value: "os", text: "SO", active: false },
        { value: "cloud", text: "Nube", active: false },
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
        { value: "school", text: "School", active: true },
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
    skills: {
      title: "select skills",
      options: [
        {
          value: "programming language",
          text: "Programming language",
          active: true,
        },
        { value: "framework", text: "Framework", active: true },
        { value: "database", text: "Database", active: true },
        { value: "vcs", text: "Version control ", active: true },
        { value: "os", text: "OS", active: false },
        { value: "cloud", text: "Cloud", active: false },
      ],
    },
  },
};
function SettingsPanel() {
  const { lang, setLang, setArea, setFields, setSkills } = useGlobalContext();
  return (
    <div className="settings-container">
      <div className="settings-panel">
        <SettingsBox data={data[lang].lang} setValue={setLang} type="select" />
        <hr />
        <SettingsBox data={data[lang].area} setValue={setArea} type="combo" />
        <hr />
        <SettingsBox
          data={data[lang].fields}
          setValue={setFields}
          type="combo"
        />
        <hr />
        <SettingsBox
          data={data[lang].skills}
          setValue={setSkills}
          type="combo"
        />
      </div>
    </div>
  );
}

export default SettingsPanel;

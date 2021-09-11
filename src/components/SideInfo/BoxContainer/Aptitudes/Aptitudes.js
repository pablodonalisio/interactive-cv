import React, { useContext } from "react";
import "./Aptitudes.css";
import { LanguageContext } from "../../../../LanguageContext";

const options = {
  ES: [
    "Rápido aprendizaje",
    "Resolución de problemas",
    "Responsable",
    "Disciplinado",
    "Trabajo en equipo",
    "Buenas habilidades comunicativas",
  ],
  EN: [
    "Fast lerning",
    "Problems solving",
    "Responsible",
    "Disciplined",
    "Team work",
    "Communication skills",
  ],
};
function Aptitudes() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="aptitudes box">
        <h2>{lang === "ES" ? "Aptitudes" : "Soft Skills"}</h2>
        <ul>
          {options[lang].map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Aptitudes;

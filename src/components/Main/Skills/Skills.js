import React, { useContext } from "react";
import "./Skills.css";
import { data } from "./Data";
import { LanguageContext } from "../../../LanguageContext";

function Skills() {
  const lang = useContext(LanguageContext);
  const skills = data.skills.sort((a, b) => (a.type_id < b.type_id ? -1 : 1));
  return (
    <>
      <section className="skills box">
        <h2>{lang === "ES" ? "Herramientas" : "Skills"}</h2>
        <div>
          {skills.map((skill, idx) => {
            return (
              <figure key={idx}>
                <img
                  src={`images/${skill.file}`}
                  alt={skill.name.toLowerCase()}
                />
                <figcaption>{skill.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;

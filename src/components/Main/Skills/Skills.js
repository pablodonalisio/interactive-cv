import React, { useContext } from "react";
import "./Skills.css";
import { data } from "./Data";
import { LanguageContext } from "../../../LanguageContext";

function Skills() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="skills box">
        <h2>{lang === "ES" ? "Herramientas" : "Skills"}</h2>
        <div>
          {data.map((skill, idx) => {
            return (
              <figure key={idx}>
                <img
                  src={`images/${skill.file}`}
                  alt={skill.name.toLowerCase}
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

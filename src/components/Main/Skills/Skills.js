import React from "react";
import "./Skills.css";
import { data } from "./Data";
import { useGlobalContext } from "../../../context";

function Skills() {
  const { lang, skills } = useGlobalContext();

  const filteredSkills = data.skills
    .filter((skill) => {
      const type = data.types.find((type) => type.id === skill.type_id).name;
      return skills.includes(type);
    })
    .sort((a, b) => (a.type_id < b.type_id ? -1 : 1));
  return (
    <>
      <section className="skills box">
        <h2>{lang === "ES" ? "Herramientas" : "Skills"}</h2>
        <div>
          {filteredSkills.map((skill, idx) => {
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

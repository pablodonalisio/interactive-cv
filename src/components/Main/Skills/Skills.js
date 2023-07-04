import React, { useState } from "react";
import "./Skills.css";
import { data } from "./Data";
import { useGlobalContext } from "../../../context";
import Filter from "../Filter";

const categories = [
  { value: 1, ES: "Lenguajes de Programacion", EN: "Programming Languages" },
  { value: 2, ES: "Frameworks", EN: "Frameworks" },
  { value: 3, ES: "Base de Datos", EN: "Databases" },
  { value: 4, ES: "Control de Versiones", EN: "Version Control" },
  { value: 5, ES: "Sistemas Operativos", EN: "Operative Systems" },
  { value: 6, ES: "Nube", EN: "Cloud" },
];

function Skills() {
  const { lang } = useGlobalContext();
  const [typeId, setTypeId] = useState("");
  const skills = data.skills
    .filter((skill) => {
      return typeId ? typeId === skill.type_id.toString() : true;
    });
  return (
    <>
      <section className="skills box">
        <h2>{lang === "ES" ? "Herramientas" : "Skills"}</h2>
        <div className="figures-container">
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
        <Filter categories={categories} setValue={setTypeId} />
      </section>
    </>
  );
}

export default Skills;

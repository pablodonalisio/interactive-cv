import React from "react";
import "./Skills.css";
import { data } from "./Data";

function Skills() {
  return (
    <>
      <section className="skills box">
        <h2>Herramientas</h2>
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

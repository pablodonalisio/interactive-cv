import React from "react";
import "./About.css";
import { useGlobalContext } from "../../../context";

const data = {
  ES: [
    "Estudié hasta 4to año de Ingeniería Mecánica en la Universidad " +
      "Tecnológica Nacional y trabajé durante muchos años en la industria " +
      "Metalmecánica. Allí mis principales roles fueron como Programador CNC, " +
      "Diseñador CAD/CAM y Gestor de procesos.",
    "Debido al gran auge e increíble potencial que observe en la programación " +
      "decidí comenzar mis estudios como " +
      "Desarrollador Fullstack donde aprendi lenguajes de programación, " +
      "frameworks, herramientas para el desarrollo y muchas cosas más"
  ],
  EN: [
    "I've studied up to 4th year of Mechanical Engineering's Degree at " +
      "Universidad Tecnológica Nacional in Córdoba, Argentina. Also worked " +
      "for many years in that area. My main roles there were " +
      "as CNC Programmer, CAD / CAM Designer and Process Manager.",
    "When I saw the incredible growth of programming and its extraordinary potential, " +
      "I began my studies as a Fullstack Developer " +
      "learning programming languages, frameworks, " +
      "development tools and many other things.",
  ],
};
function About() {
  const { lang } = useGlobalContext();

  return (
    <>
      {data && (
        <section className="about box">
          <h2>{lang === "ES" ? "Sobre mi" : "About me"}</h2>
          {data[lang].map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </section>
      )}
    </>
  );
}

export default About;

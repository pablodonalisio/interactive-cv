import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../../LanguageContext";

const options = {
  ES: [
    "Estudié hasta 4to año de Ingeniería Mecánica en la Universidad" +
      "Tecnológica Nacional y trabajé durante muchos años en la industria" +
      "Metalmecánica. Allí mis principales roles fueron como Programador CNC," +
      "Diseñador CAD/CAM y Gestor de procesos.",
    "Debido a mi inclinación por el desarrollo de nuevas tecnologías y" +
      "gusto por la programación, decidí comenzar mis estudios como" +
      "Desarrollador Fullstack dictado por The Odin Project donde pude" +
      "aprender lenguajes de programación (Ruby, Javascript, CSS, HTML, SQL)," +
      "frameworks (Rails, ReactJs, Bootstrap), herramientas para el" +
      "desarrollo (Git/Github) entre otras cosas.",
  ],
  EN: [
    "I've studied up to 4th year of Mechanical Engineering's Degree at" +
      "Universidad Tecnológica Nacional in Córdoba, Argentina. Also worked" +
      "for many years in that area. My main roles there were" +
      "as CNC Programmer, CAD / CAM Designer and Process Manager.",
    "Due to my inclination for development of new technologies and since" +
      "I love programming, I began my studies as a Fullstack Developer" +
      "dictated by The Odin Project. There I've learned programming" +
      "languages ​​(Ruby, Javascript, CSS, HTML, SQL), frameworks (Rails," +
      "ReactJs, Bootstrap), development tools (Git / Github) among other" +
      "things.",
  ],
};
function About() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="about box">
        <h2>{lang === "ES" ? "Sobre mi" : "About me"}</h2>
        {options[lang].map((paragraph, idx) => {
          if (options[lang].length === idx + 1) return <p>{paragraph}</p>;
          return (
            <>
              <p>{paragraph}</p>
              <br />
              <br />
            </>
          );
        })}
      </section>
    </>
  );
}

export default About;

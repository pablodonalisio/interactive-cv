import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../../LanguageContext";

const options = {
  ES: [
    "Estudié hasta 4to año de Ingeniería Mecánica en la Universidad " +
      "Tecnológica Nacional y trabajé durante muchos años en la industria " +
      "Metalmecánica. Allí mis principales roles fueron como Programador CNC, " +
      "Diseñador CAD/CAM y Gestor de procesos.",
    "Debido al gran auge e increíble potencial que observe en la programación " +
      "y siendo el desarrollo web un buen terreno para un desarrollador novel, " +
      "decidí comenzar mis estudios como " +
      "Desarrollador Fullstack dictado por The Odin Project donde pude " +
      "aprender lenguajes de programación, " +
      "frameworks, herramientas para el " +
      "desarrollo y muchas cosas más",
    "Mi meta última es poder quizás algún día poder combinar estas dos apasionantes " +
      "áreas, lo cual requiere de mucho esfuerzo, " +
      "aprendiendo todos los días un poco más y creciendo a partir " +
      "de la  experiencia.",
  ],
  EN: [
    "I've studied up to 4th year of Mechanical Engineering's Degree at " +
      "Universidad Tecnológica Nacional in Córdoba, Argentina. Also worked " +
      "for many years in that area. My main roles there were " +
      "as CNC Programmer, CAD / CAM Designer and Process Manager.",
    "By looking at the incredible growth of programming and its extraordinary potential, " +
      "and since web development it's a good place for a novel programmer, " +
      "I began my studies as a Fullstack Developer " +
      "dictated by The Odin Project. There I've learned programming " +
      "languages, frameworks, " +
      " development tools and many other things.",
    "My ultimate goal is to be able to mix these two exciting areas, which requires " +
      "a lot of effort, learning new things everyday and getting more experienced.",
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
            </>
          );
        })}
      </section>
    </>
  );
}

export default About;

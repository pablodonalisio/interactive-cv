import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section className="about box">
        <h2>Sobre mi</h2>
        <p>
          Estudié hasta 4to año de Ingeniería Mecánica en la Universidad
          Tecnológica Nacional y trabajé durante muchos años en la industria
          Metalmecánica. Allí mis principales roles fueron como Programador CNC,
          Diseñador CAD/CAM y Gestor de procesos.
          <br />
          <br />
          Debido a mi inclinación por el desarrollo de nuevas tecnologías y
          gusto por la programación, decidí comenzar mis estudios como
          Desarrollador Fullstack dictado por The Odin Project donde pude
          aprender lenguajes de programación (Ruby, Javascript, CSS, HTML, SQL),
          frameworks (Rails, ReactJs, Bootstrap), herramientas para el
          desarrollo (Git/Github) entre otras cosas.
        </p>
      </section>
    </>
  );
}

export default About;

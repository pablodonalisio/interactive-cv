import React from "react";
import "./Education.css";

function Education() {
  return (
    <>
      <section className="education box box-list">
        <h2>Educación</h2>
        <ul>
          <li>
            <h3 className="course-title">
              <strong>
                The Odin Project - Full Stack Ruby on Rails
                <a
                  href="https://www.theodinproject.com/paths/full-stack-ruby-on-rails?"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </strong>
            </h3>
            <p>Inicio: 2020 - Fin: 2021</p>
            <ul className="curso-lecciones">
              <li>
                <p>Ruby</p>
                <ul className="curso">
                  <li>OOP</li>
                  <li>Metodos recursivos</li>
                  <li>Estructura de datos</li>
                  <li>Testing(Rspec)</li>
                </ul>
              </li>
              <li>
                <p>Rails</p>
                <ul className="curso">
                  <li>MVC</li>
                  <li>ActiveRecords</li>
                  <li>Autenticación</li>
                  <li>APIs</li>
                  <li>Mailers</li>
                </ul>
              </li>
              <li>
                <p>HTML/CSS</p>
                <ul className="curso">
                  <li>HTML basics</li>
                  <li>CSS basics</li>
                  <li>Flexbox & Grid</li>
                  <li>Design & UX</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap</li>
                  <li>Sass</li>
                </ul>
              </li>
              <li>
                <p>Javascript</p>
                <ul className="curso">
                  <li>Factory Functions & Classes</li>
                  <li>Modulos</li>
                  <li>Linting</li>
                  <li>Webpack</li>
                  <li>Forms</li>
                  <li>ES</li>
                  <li>Async Js</li>
                  <li>ReactJs</li>
                  <li>Testing</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="course-title">
              <strong>
                Aceleración Alkemy
                <a href="https://alkemy.org/" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </strong>
            </h3>
            <p>Inicio: Abr-2021 - Fin: Jul-2021</p>
            <p>Actividades:</p>
            <ul className="curso">
              <li>
                Desarrollo de API para ONG "Somos Mas" con equipo de trabajo
                aplicando metodología SCRUM.
              </li>
              <li>Desarrollo de aplicaciones APIRest.</li>
              <li>Curso Git/Bitbucket</li>
              <li>Curso de Metodologías Agiles</li>
            </ul>
          </li>
          <li>
            <h3 className="course-title">
              <strong>
                Ingeniería Mecánica - Universidad Tecnológica Nacional
              </strong>
            </h3>
            <p>Inicio: 2007 - Fin: 2012</p>
            <p>Cursado hasta 4to año de la carrera.</p>
          </li>
          <li>
            <h3 className="course-title">
              <strong>
                Bachiller en Gestion de las Organizaciones - Colegio Santo Tomás
              </strong>
            </h3>
            <p>Inicio: 1994 - Fin: 2006</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Education;

import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills box">
        <h2>Herramientas</h2>
        <div>
          <figure>
            <img src="images/html5.png" alt="html5" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src="images/CSS3.svg" alt="css3" />
            <figcaption>CSS3</figcaption>
          </figure>
          <figure>
            <img src="images/javascript.png" alt="javascript" />
            <figcaption>Javascript</figcaption>
          </figure>
          <figure>
            <img src="images/React.png" alt="javascript" />
            <figcaption>ReactJs</figcaption>
          </figure>
          <figure>
            <img src="images/ruby.jpeg" alt="ruby" />
            <figcaption>Ruby</figcaption>
          </figure>
          <figure>
            <img src="images/rails.png" alt="rails" />
            <figcaption>Rails</figcaption>
          </figure>
          <figure>
            <img src="images/postgresql.jpeg" alt="postgresql" />
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure>
            <img src="images/git.png" alt="git" />
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <img src="images/github.png" alt="github" />
            <figcaption>Github</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Skills;

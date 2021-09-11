import React from "react";
import "./Main.css";
import About from "./About/About";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

function Main() {
  return (
    <>
      <section className="main column">
        <About />
        <Education />
        <Skills />
      </section>
    </>
  );
}

export default Main;

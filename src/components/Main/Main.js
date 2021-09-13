import React, { useContext } from "react";
import "./Main.css";
import About from "./About/About";
import MilestoneBox from "./Milestone/MilestoneBox";
import Skills from "./Skills/Skills";
import { LanguageContext } from "../../LanguageContext";

function Main() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="main column">
        <About />
        <MilestoneBox category={lang === "ES" ? "Experiencia" : "Experience"} />
        <MilestoneBox category={lang === "ES" ? "Educación" : "Education"} />
        <Skills />
      </section>
    </>
  );
}

export default Main;

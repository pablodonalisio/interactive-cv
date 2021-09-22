import React, { useContext } from "react";
import "./Main.css";
import MilestoneBox from "./Milestone/MilestoneBox";
import Skills from "./Skills/Skills";
import { LanguageContext } from "../../LanguageContext";

function Main() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="main column">
        <MilestoneBox category={lang === "ES" ? "Experiencia" : "Experience"} />
        <MilestoneBox category={lang === "ES" ? "Educación" : "Education"} />
        <Skills />
      </section>
    </>
  );
}

export default Main;

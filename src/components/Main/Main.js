import React from "react";
import "./Main.css";
import MilestoneBox from "./Milestone/MilestoneBox";
import Skills from "./Skills/Skills";
import { useGlobalContext } from "../../context";

function Main() {
  const { lang } = useGlobalContext();
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

import React from "react";
import "./Main.css";
import About from "./About/About";
import MilestoneBox from "./Milestone/MilestoneBox";
import Skills from "./Skills/Skills";
import { useGlobalContext } from "../../context";

function Main() {
  const { lang, fields } = useGlobalContext();
  const elements = [
    [<About />, "about"],
    [
      <MilestoneBox category={lang === "ES" ? "Experiencia" : "Experience"} />,
      "experience",
    ],
    [
      <MilestoneBox category={lang === "ES" ? "Educación" : "Education"} />,
      "education",
    ],
    [<Skills />, "skills"],
  ];
  return (
    <>
      <section className="main column">
        {elements.map((element, idx) => {
          return fields.includes(element[1]) && element[0];
        })}
      </section>
    </>
  );
}

export default Main;

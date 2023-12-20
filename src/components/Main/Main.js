import React from "react";
import "./Main.css";
import MilestoneBox from "./Milestone/MilestoneBox";
import Skills from "./Skills/Skills";
import { useGlobalContext } from "../../context";

function Main() {
  const { lang, fields } = useGlobalContext();
  const orderedFields = ["experience", "education", "skills"].filter((field) =>
    fields.includes(field)
  );
  return (
    <>
      <section className="main column">
        {orderedFields.map((field, idx) => {
          if (field === "experience")
            return (
              <MilestoneBox
                category={lang === "ES" ? "Experiencia" : "Experience"}
                key={idx}
              />
            );
          if (field === "education")
            return (
              <MilestoneBox
                category={lang === "ES" ? "Educación" : "Education"}
                key={idx}
              />
            );
          if (field === "skills") return <Skills key={idx} />;
          return <p>field doesn't exist</p>;
        })}
      </section>
    </>
  );
}

export default Main;

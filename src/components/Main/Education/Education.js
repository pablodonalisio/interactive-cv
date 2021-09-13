import React, { useContext } from "react";
import "./Education.css";
import Milestone from "../Milestone";
import { Courses } from "./Courses";
import { LanguageContext } from "../../../LanguageContext";

function Education() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="education box box-list">
        <h2>{lang === "ES" ? "Educación" : "Education"}</h2>
        <ul>
          {Courses[lang].map((data, idx) => (
            <Milestone key={idx} data={data} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Education;

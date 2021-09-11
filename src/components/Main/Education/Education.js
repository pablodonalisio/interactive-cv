import React, { useContext } from "react";
import "./Education.css";
import Course from "./Course";
import { Courses } from "./Courses";
import { LanguageContext } from "../../../LanguageContext";

function Education() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <section className="education box box-list">
        <h2>Educación</h2>
        <ul>
          {Courses[lang].map((data, idx) => (
            <Course key={idx} data={data} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Education;

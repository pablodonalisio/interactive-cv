import React from "react";
import "./Education.css";
import Course from "./Course";
import { Courses } from "./Courses";

function Education() {
  return (
    <>
      <section className="education box box-list">
        <h2>Educación</h2>
        <ul>
          {Courses.map((data, idx) => (
            <Course key={idx} data={data} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Education;

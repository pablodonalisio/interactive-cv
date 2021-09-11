import React from "react";
import "./Lessons.css";

function Lessons({ lessons }) {
  return (
    <>
      <ul className="curso-lecciones">
        {lessons.map((lesson, idx) => {
          return (
            <li key={idx}>
              <p>{lesson.title}</p>
              <ul className="curso">
                {lesson.structure.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lessons;

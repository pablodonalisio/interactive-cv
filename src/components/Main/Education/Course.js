import React, { useContext } from "react";
import "./Course.css";
import Lessons from "./Lessons";
import { LanguageContext } from "../../../LanguageContext";

function Course({ data }) {
  const lang = useContext(LanguageContext);
  return (
    <>
      <li className="course">
        <h3 className="course-title">
          <strong>
            {data.title}
            {data.url && (
              <a href={data.url} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </strong>
        </h3>
        <p>
          {lang === "ES"
            ? `Inicio: ${data.start} - Fin: ${data.end}`
            : `Start: ${data.start} - End: ${data.end}`}
        </p>
        {data.description && <p>{data.description}</p>}
        {data.lessons && <Lessons lessons={data.lessons} />}
      </li>
    </>
  );
}

export default Course;

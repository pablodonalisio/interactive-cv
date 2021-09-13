import React, { useContext } from "react";
import MilestoneList from "./MilestoneList";
import { LanguageContext } from "../../../LanguageContext";
import "./Milestone.css";

function Milestone({ data }) {
  const lang = useContext(LanguageContext);
  return (
    <>
      <li className="milestone">
        <h3 className="milestone-title">
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
        {data.list && <MilestoneList list={data.list} />}
      </li>
    </>
  );
}

export default Milestone;

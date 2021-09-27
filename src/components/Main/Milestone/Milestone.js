import React, { useState, useEffect, useRef } from "react";
import MilestoneList from "./MilestoneList";
import { useGlobalContext } from "../../../context";
import "./Milestone.css";

function Milestone({ data }) {
  const { lang, setHiddenElements } = useGlobalContext();
  const [showList, setShowList] = useState(false);
  const showListBtn = useRef();
  useEffect(() => {
    setHiddenElements((prev) => [...prev, showListBtn.current]);
  }, [setHiddenElements]);
  // const toggleShowListBtn = (e) => {
  //   const btn = showListBtn.current;
  //   if (btn) {
  //     if (e.type === "mouseout") btn.classList.add("hidden");
  //     if (e.type === "mouseover") btn.classList.remove("hidden");
  //   }
  // };
  // useEffect(() => {
  //   const curriculum = document.getElementById("curriculum");
  //   curriculum.addEventListener("mouseout", toggleShowListBtn);
  //   curriculum.addEventListener("mouseover", toggleShowListBtn);
  //   return () => {
  //     curriculum.removeEventListener("mouseout", toggleShowListBtn);
  //     curriculum.removeEventListener("mouseover", toggleShowListBtn);
  //   };
  // }, []);
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
          {data.list && (
            <button
              className="show-list-btn hidden"
              ref={showListBtn}
              onClick={() => setShowList(!showList)}
            >
              {showList ? (
                <i className="fas fa-caret-square-up"></i>
              ) : (
                <i className="fas fa-caret-square-down"></i>
              )}
            </button>
          )}
        </h3>
        <p>
          {lang === "ES"
            ? `Inicio: ${data.start} - Fin: ${data.end}`
            : `Start: ${data.start} - End: ${data.end}`}
        </p>
        {data.description && <p>{data.description}</p>}
        {showList && data.list && <MilestoneList list={data.list} />}
      </li>
    </>
  );
}

export default Milestone;

import React, { useState } from "react";
import Milestone from "./Milestone";
import { Milestones } from "./Milestones";
import { useGlobalContext } from "../../../context";
import "./MilestoneBox.css";

function MilestoneBox({ category }) {
  const { lang } = useGlobalContext();
  const [area, setArea] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const categories = [
    { name: "programming", ES: "Programación", EN: "Programming" },
    { name: "mechanics", ES: "Mecanica", EN: "Mechanics" },
  ];
  const data = Milestones[lang][category].filter((milestone) =>
    area ? area === milestone.area : true
  );
  const changeArea = (e) => {
    setArea(e.target.value);
  };
  const handleFilterClick = () => {
    setShowFilter(true);
    setTimeout(() => {
      document.addEventListener(
        "click",
        () => {
          setShowFilter(false);
          console.log("hello");
        },
        {
          once: true,
        }
      );
    }, 10);
  };
  return (
    <>
      {data && (
        <section className="box milestone-box">
          <h2>{category}</h2>
          {data.length > 0 ? (
            <ul>
              {data.map((milestoneData, idx) => (
                <Milestone key={idx} data={milestoneData} />
              ))}
            </ul>
          ) : (
            <p>
              {lang === "ES"
                ? "No hay nada para mostrar... por ahora"
                : "Nothing to show... so far"}
            </p>
          )}
          <div className="filter">
            <i className="fas fa-filter" onClick={handleFilterClick}></i>
            {showFilter && (
              <ul>
                {categories.map((cat, idx) => {
                  return (
                    <li key={idx}>
                      <button value={cat.name} onClick={changeArea}>
                        {cat[lang]}
                      </button>
                    </li>
                  );
                })}
                <li>
                  <button value="" onClick={changeArea}>
                    {lang === "ES" ? "Todo" : "All"}
                  </button>
                </li>
              </ul>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default MilestoneBox;

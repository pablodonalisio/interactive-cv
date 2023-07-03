import React, { useState } from "react";
import Milestone from "./Milestone";
import { Milestones } from "./Milestones";
import { useGlobalContext } from "../../../context";
import "./MilestoneBox.css";
import Filter from "../Filter";

function MilestoneBox({ category }) {
  const { lang } = useGlobalContext();
  const [area, setArea] = useState("programming");
  const categories = [
    { value: "programming", ES: "Programación", EN: "Programming" },
    { value: "mechanics", ES: "Mecanica", EN: "Mechanics" },
  ];
  const data = Milestones[lang][category].filter((milestone) =>
    area ? area === milestone.area : true
  );

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
          <Filter categories={categories} setValue={setArea} />
        </section>
      )}
    </>
  );
}

export default MilestoneBox;

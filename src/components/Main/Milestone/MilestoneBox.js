import React from "react";
import Milestone from "./Milestone";
import { Milestones } from "./Milestones";
import { useGlobalContext } from "../../../context";
import "./MilestoneBox.css";

function MilestoneBox({ category }) {
  const { lang } = useGlobalContext();

  const data = Milestones[lang][category];
  return (
    <>
      {data && (
        <section className="box milestone-box">
          <h2>{category}</h2>
          <ul>
            {data.map((milestoneData, idx) => (
              <Milestone key={idx} data={milestoneData} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default MilestoneBox;

import React from "react";

function MilestoneList({ list }) {
  return (
    <>
      <ul className="milestone-list">
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              <p>{item.title}</p>
              <ul className="milestone-list-item">
                {item.structure.map((subject, idx) => (
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

export default MilestoneList;

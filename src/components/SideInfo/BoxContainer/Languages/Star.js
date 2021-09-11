import React from "react";
import "./Star.css";

function Star({ state }) {
  const starClass = state ? "rate-star rate-active" : "rate-star";
  return (
    <div className={starClass}>
      <i className="fas fa-star"></i>
    </div>
  );
}

export default Star;

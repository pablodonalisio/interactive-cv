import React, { useState, useEffect } from "react";
import "./Rating.css";
import Star from "./Star";

function Rating({ rate }) {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const state = i < rate ? true : false;
      setStatus((prev) => [...prev, state]);
    }
  }, [rate]);
  return (
    <>
      <div className="rate">
        {status.map((state, idx) => (
          <Star key={idx} state={state} />
        ))}
      </div>
    </>
  );
}

export default Rating;

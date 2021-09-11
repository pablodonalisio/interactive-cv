import React from "react";
import "./Languages.css";
import Rating from "./Rating";

function Languages() {
  return (
    <>
      <section className="languages box">
        <h2>Idiomas</h2>
        <div>
          <p>Español</p>
          <Rating rate={5} />
          <p>Ingles</p>
          <Rating rate={4} />
          <p>Alemán</p>
          <Rating rate={2} />
        </div>
      </section>
    </>
  );
}

export default Languages;

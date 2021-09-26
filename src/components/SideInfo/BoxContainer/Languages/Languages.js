import React from "react";
import "./Languages.css";
import Rating from "./Rating";
import { useGlobalContext } from "../../../../context";

const options = {
  ES: {
    title: "Idiomas",
    spanish: "Español",
    english: "Inglés",
    german: "Alemán",
  },
  EN: {
    title: "Languages",
    spanish: "Spanish",
    english: "English",
    german: "German",
  },
};
function Languages() {
  const { lang } = useGlobalContext();
  const opt = options[lang];
  return (
    <>
      <section className="languages box">
        <h2>{opt.title}</h2>
        <div>
          <p>{opt.spanish}</p>
          <Rating rate={5} />
          <p>{opt.english}</p>
          <Rating rate={4} />
          <p>{opt.german}</p>
          <Rating rate={2} />
        </div>
      </section>
    </>
  );
}

export default Languages;

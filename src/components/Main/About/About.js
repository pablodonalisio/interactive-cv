import React from "react";
import "./About.css";
import { useGlobalContext } from "../../../context";

const data = {
  ES: [
    "Comence mis estudios como Desarrollador Fulstack a mediados del " +
      "2020, donde aprendi lenguajes de programación, " +
      "frameworks, herramientas para el desarrollo y muchas cosas más",
    "A fines de 2021 logre conseguir mi primer trabajo como desarrollador y " +
      "a partir de ahi pude lograr ahondar mis conocimientos en muchos aspectos " +
      "principalmente en el desarrllo de Backend",
  ],
  EN: [
    "I began my studies as a Fullstack Developer in 2020 " +
      "learning programming languages, frameworks, " +
      "development tools and many other things.",
    "At the end of 2021 I managed to get my first job as a developer and from there " +
      "I was able to deepen my knowledge in many aspects, mainly in Backend development.",
  ],
};
function About() {
  const { lang } = useGlobalContext();

  return (
    <>
      {data && (
        <section className="about box">
          <h2>{lang === "ES" ? "Sobre mi" : "About me"}</h2>
          {data[lang].map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </section>
      )}
    </>
  );
}

export default About;

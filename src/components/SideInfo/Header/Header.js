import React, { useState, useEffect } from "react";
import "./Header.css";
import photo from "./fotocurriculum.jpg";

const options = {
  ES: "Desarrollador Web",
  EN: "Web Developer",
};

function Header({ lang }) {
  const [ocupation, setOcupation] = useState(options.ES);

  useEffect(() => {
    setOcupation(options[lang]);
  }, [lang]);
  return (
    <>
      <section className="header box">
        <h1>Pablo Donalisio</h1>
        <p id="profesion">{ocupation}</p>
        <img id="photo" src={photo} alt="Foto de Pablo Donalisio" />
      </section>
    </>
  );
}

export default Header;

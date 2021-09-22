import React, { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import "./Header.css";
import photo from "./fotocurriculum.jpg";

const options = {
  Programming: {
    ES: "Desarrollador Web",
    EN: "Web Developer",
  },
};

function Header() {
  const lang = useContext(LanguageContext);
  const ocupation = options[lang];

  return (
    <>
      <section className="header box">
        <h1>Pablo Donalisio</h1>
        {ocupation && <p id="profesion">{ocupation}</p>}
        <img id="photo" src={photo} alt="Foto de Pablo Donalisio" />
      </section>
    </>
  );
}

export default Header;

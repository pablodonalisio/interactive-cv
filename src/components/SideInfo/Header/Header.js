import React from "react";
import "./Header.css";
import photo from "./fotocurriculum.jpg";

function Header() {
  return (
    <>
      <section className="header box">
        <h1>Pablo Donalisio</h1>
        <p id="profesion">Desarrolador Web</p>
        <img id="photo" src={photo} alt="Foto de Pablo Donalisio" />
      </section>
    </>
  );
}

export default Header;

import React from "react";
import { useGlobalContext } from "../../../context";
import "./Header.css";

const options = {
  Programming: {
    ES: "Desarrollador Web",
    EN: "Web Developer",
  },
};

function Header() {
  const { lang } = useGlobalContext();
  const ocupation = options['Programming'][lang];

  return (
    <>
      <section className="header box">
        <h1>Pablo Donalisio</h1>
        {ocupation && <p id="profesion">{ocupation}</p>}
      </section>
    </>
  );
}

export default Header;
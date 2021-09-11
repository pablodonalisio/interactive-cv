import React from "react";
import "./BoxContainer.css";
import Contact from "./Contact/Contact";
import Aptitudes from "./Aptitudes/Aptitudes";
import Languages from "./Languages/Languages";

function BoxContainer({ lang }) {
  return (
    <div className="box-container">
      <Contact lang={lang} />
      <Aptitudes lang={lang} />
      <Languages lang={lang} />
    </div>
  );
}

export default BoxContainer;

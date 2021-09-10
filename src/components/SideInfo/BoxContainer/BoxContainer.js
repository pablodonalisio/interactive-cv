import React from "react";
import "./BoxContainer.css";
import Contact from "./Contact/Contact";
import Aptitudes from "./Aptitudes/Aptitudes";
import Languages from "./Languages/Languages";

function BoxContainer() {
  return (
    <div className="box-container">
      <Contact />
      <Aptitudes />
      <Languages />
    </div>
  );
}

export default BoxContainer;

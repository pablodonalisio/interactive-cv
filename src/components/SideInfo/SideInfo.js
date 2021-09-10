import React from "react";
import "./SideInfo.css";
import Header from "./Header/Header";
import BoxContainer from "./BoxContainer/BoxContainer";

function SideInfo() {
  return (
    <>
      <section className="side-info column">
        <Header />
        <BoxContainer />
      </section>
    </>
  );
}

export default SideInfo;

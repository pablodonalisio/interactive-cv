import React from "react";
import "./SideInfo.css";
import Header from "./Header/Header";
import BoxContainer from "./BoxContainer/BoxContainer";

function SideInfo({ lang }) {
  return (
    <>
      <section className="side-info column">
        <Header lang={lang} />
        <BoxContainer lang={lang} />
      </section>
    </>
  );
}

export default SideInfo;

import React from "react";
import "./Languages.css";

function Languages() {
  return (
    <>
      <section className="languages box">
        <h2>Idiomas</h2>
        <div>
          <p>Español</p>
          <div className="rate">
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
          </div>
          <p>Ingles</p>
          <div className="rate">
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star">
              <i className="fas fa-star"></i>
            </div>
          </div>
          <p>Alemán</p>
          <div className="rate">
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star rate-active">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star">
              <i className="fas fa-star"></i>
            </div>
            <div className="rate-star">
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Languages;

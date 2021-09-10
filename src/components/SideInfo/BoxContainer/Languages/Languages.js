import React from "react";
import "./Languages.css";

function Languages() {
  return (
    <>
      <section className="languages box">
        <h2>Idiomas</h2>
        <div>
          <p>Español</p>
          <div class="rate">
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p>Ingles</p>
          <div class="rate">
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p>Alemán</p>
          <div class="rate">
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star rate-active">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star">
              <i class="fas fa-star"></i>
            </div>
            <div class="rate-star">
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Languages;

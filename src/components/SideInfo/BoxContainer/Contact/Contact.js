import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact box">
        <h2>Contacto</h2>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>Córdoba. Argentina
          </li>
          <li>
            <i className="fas fa-envelope"></i>pablo.donalisio@gmail.com
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>+54 9 3516 20-0037
          </li>
          <li>
            <i className="fab fa-linkedin"></i>Pablo Donalisio
            <a
              href="https://www.linkedin.com/in/pablodonalisio/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li>
            <i className="fab fa-github"></i>pablodonalisio
            <a
              href="https://github.com/pablodonalisio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Contact;

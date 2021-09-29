import React, { useState } from "react";
import "./Info.css";
import { useGlobalContext } from "../../context";

function Info() {
  const { lang, setLang } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(true);
  return (
    <>
      {showInfo && (
        <div className="info-container">
          <div className="info-content">
            <section>
              <p>Por favor, elige un idioma / Please select a language</p>
              <select
                name="lang"
                id="lang"
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="ES">ES</option>
                <option value="EN">EN</option>
              </select>
            </section>
            {lang === "ES" && (
              <section>
                <p>
                  Hola! Cree este CV interactivo para que puedas filtrar o
                  expandir la información si asi lo deseas.
                </p>
                <p>
                  Para esto solo debes buscar el ícono correspondiente a la
                  acción que deseas realizar:
                </p>
                <ul>
                  <li>
                    Filtrar: <i className="fas fa-filter"></i>
                  </li>

                  <li>
                    Expandir: <i className="fas fa-caret-square-down"></i>
                  </li>
                </ul>
              </section>
            )}
            {lang === "EN" && (
              <section>
                <p>
                  Hi! I've created this interactive CV so you can filter or
                  expand the information if you want to.
                </p>
                <p>
                  To do so you just have to look for the corresponding icon to
                  the action you want to do:
                </p>
                <ul>
                  <li>
                    Filter: <i className="fas fa-filter"></i>
                  </li>

                  <li>
                    Expand: <i className="fas fa-caret-square-down"></i>
                  </li>
                </ul>
              </section>
            )}
            <button className="btn-info" onClick={() => setShowInfo(false)}>
              {lang === "ES" ? "Entendido!" : "Got it!"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;

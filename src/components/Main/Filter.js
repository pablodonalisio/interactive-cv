import React, { useState } from "react";
import "./Filter.css";
import { useGlobalContext } from "../../context";

function Filter({ categories, setValue }) {
  const [showFilter, setShowFilter] = useState(false);
  const { lang } = useGlobalContext();
  const handleFilterClick = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
      setTimeout(() => {
        document.addEventListener(
          "click",
          () => {
            setShowFilter(false);
          },
          {
            once: true,
          }
        );
      }, 20);
    }
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="filter">
      <i className="fas fa-filter" onClick={handleFilterClick}></i>
      {showFilter && (
        <ul>
          {categories.map((cat, idx) => {
            return (
              <li key={idx}>
                <button value={cat.value} onClick={changeValue}>
                  {cat[lang]}
                </button>
              </li>
            );
          })}
          <li>
            <button value="" onClick={changeValue}>
              {lang === "ES" ? "Todo" : "All"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Filter;

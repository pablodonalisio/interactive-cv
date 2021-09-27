import React, { useState } from "react";

function SettingsBox({ data, setValue, type }) {
  const { title, options } = data;
  const [activeBtns, setActiveBtns] = useState(
    options.map((option) => option.active)
  );
  const changeActiveButton = (idx) => {
    setActiveBtns(
      activeBtns.map((state, index) => (index === idx ? true : false))
    );
  };
  const toggleButton = (idx) => {
    setActiveBtns(
      activeBtns.map((state, index) => (index === idx ? !state : state))
    );
  };
  const toggleValue = (value) => {
    setValue((prev) => {
      console.log(prev);
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const changeValue = (value, idx) => {
    if (type === "select") {
      changeActiveButton(idx);
      setValue(value);
    } else if (type === "combo") {
      toggleButton(idx);
      toggleValue(value);
    }
  };
  return (
    <div className="settings-box">
      <h2>{title}</h2>
      <div className="btn-container">
        {options.map((option, idx) => {
          const { value, text } = option;
          return (
            <button
              key={idx}
              className={`settings-btn ${activeBtns[idx] && "active"}`}
              onClick={() => changeValue(value, idx)}
            >
              {text || value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsBox;

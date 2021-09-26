import React, { useState } from "react";

function SettingsBox({ data, setValue }) {
  const { title, options } = data;
  const [activeBtns, setActiveBtns] = useState(
    options.map((option) => option.active)
  );
  const changeActiveButton = (idx) => {
    setActiveBtns(
      activeBtns.map((active, index) => (index === idx ? true : false))
    );
  };

  const changeValue = (value, idx) => {
    changeActiveButton(idx);
    setValue(value);
  };
  return (
    <div className="settings-box">
      <h2>{title}</h2>
      <div className="btn-container">
        {options.map((option, idx) => {
          const { value, text } = option;
          const isActive = activeBtns[idx];
          return (
            <button
              key={idx}
              className={`settings-btn ${isActive && "active"}`}
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

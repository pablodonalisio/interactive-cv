import React, { useState } from "react";

function SettingsBox({ data, setValue }) {
  const { title } = data;
  const [options, setOptions] = useState(data.options);
  const changeActiveButton = (idx) => {
    setOptions(
      options.map((option, index) => {
        option.active = index === idx ? true : false;
        return option;
      })
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
          const { value, active } = option;
          return (
            <button
              key={idx}
              className={`settings-btn ${active && "active"}`}
              onClick={() => changeValue(value, idx)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsBox;

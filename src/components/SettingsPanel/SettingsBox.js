import React from "react";

function SettingsBox({ data, setValue }) {
  const { title, options } = data;
  const changeActiveButton = (e) => {
    e.target.parentElement
      .getElementsByClassName("active")[0]
      .classList.toggle("active");
    e.target.classList.add("active");
  };

  const changeValue = (e) => {
    changeActiveButton(e);
    setValue(e.target.value);
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
              onClick={changeValue}
              value={value}
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

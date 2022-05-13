import React from "react";
import "./Input.scss";

const Input = ({ taskId, taskCategory, label, value, setChange }) => {
  const classes = value ? "input input-with-value" : "input";
  return (
    <>
      <div className={classes}>
        <input
          taskId={taskId}
          taskCategory={taskCategory}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
        <label htmlFor={taskId} className="Input__label">
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;

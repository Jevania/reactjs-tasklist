import React from "react";
import "./InputArea.scss";

const InputArea = ({ taskId, taskCategory, label, value, setChange }) => {
  return (
    <>
      <div className="input-area">
        <textarea
          taskId={taskId}
          taskCategory={taskCategory}
          value={value}
          onChange={(e) => setChange(e.target.value)}
          placeholder={label}
        />
      </div>
    </>
  );
};

export default InputArea;

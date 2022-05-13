import "./DescriptionInput.scss";

const DescriptionInput = ({ taskId, taskCategory, label, value, setChange }) => {
  return (
    <>
      <div className="input-desc">
        <textarea
          taskId={taskId}
          taskCategory={taskCategory}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default DescriptionInput;

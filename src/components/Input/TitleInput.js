import "./TitleInput.scss";

const TitleInput = ({ taskId, taskCategory, label, value, setChange }) => {
  return (
    <>
      <div className="input-title">
        <input
          taskId={taskId}
          taskCategory={taskCategory}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TitleInput;

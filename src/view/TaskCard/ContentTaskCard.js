import { Trash2, Edit } from "react-feather";

const ContentTaskCard = ({
  item,
  isChecked,
  addToCompleted,
  deleteFromBoard,
  setIsEdited,
}) => {
  return (
    <>
      <div className="task-card-wrapper">
        <div className="task-card-check">
          <h4>{item.taskTitle}</h4>
          <label class="check-container">
            {isChecked ? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" onClick={() => addToCompleted(item)} />
            )}
            <span class="checkmark"></span>
          </label>
        </div>
        {item.taskDescription && (
          <p className="item-description">{item.taskDescription}</p>
        )}
        <p></p>
        <div class="task-card-wrapper-button">
          <button disabled="disabled">{item.taskCategory}</button>
          <div className="button-group">
            {item.taskStatus !== "completed" && (
              <i onClick={() => setIsEdited(true)}>
                <Edit />
              </i>
            )}

            <i onClick={() => deleteFromBoard(item)}>
              <Trash2 />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTaskCard;

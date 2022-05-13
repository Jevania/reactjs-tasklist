import React, { useState } from "react";
import { Save } from "react-feather";
import { useDispatchTask } from "../../data/Task";
import TitleInput from "../../components/Input/TitleInput";
import DescriptionInput from "../../components/InputArea/DescriptionInput";
import "./TaskCard.scss";

const EditedTaskCard = ({ item, setIsEdited, taskStatus }) => {
  const dispatch = useDispatchTask();
  const editItem = (item) => {
    dispatch({ type: "UPDATE TASK", data: { item } });
    setIsEdited(false);
  };
  const [task, setTask] = useState({
    taskId: item.taskId,
    taskStatus: item.taskStatus,
    taskCategory: item.taskCategory,
    taskTitle: item.taskTitle,
    taskDescription: item.taskDescription,
  });

  const setChange = (option, value) => {
    setTask((prevState) => {
      return { ...prevState, [option]: value };
    });
  };

  return (
    <div className="task-card-wrapper">
      <div className="task-card-check">
        <h4>
          <TitleInput
            value={task.taskTitle}
            id="edit-title"
            setChange={(value) => setChange("taskTitle", value)}
          />
        </h4>
      </div>
      <DescriptionInput
        value={task.taskDescription}
        id="edit-desc"
        setChange={(value) => setChange("taskDescription", value)}
      />
      <div class="task-card-wrapper-button">
        <button disabled="disabled">{item.taskCategory}</button>
        <div className="button-group">
          <i onClick={() => editItem(task)}>
            <Save />
          </i>
        </div>
      </div>
    </div>
  );
};

export default EditedTaskCard;

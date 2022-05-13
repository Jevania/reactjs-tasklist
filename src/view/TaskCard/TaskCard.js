import React, { useState } from "react";
import { useDispatchTask } from "../../data/Task";
import ContentTaskCard from "./ContentTaskCard";
import EditedTaskCard from "./EditedTaskCard";
import "./TaskCard.scss";

const TaskCard = ({ item }) => {
  const [isChecked, setIsChecked] = useState(
    item.taskStatus === "completed" ? 1 : 0
  );
  const [isEdited, setIsEdited] = useState(0);
  const dispatch = useDispatchTask();

  const addToCompleted = (item) => {
    setIsChecked(true);
    setTimeout(() => {
      dispatch({ type: "UPDATE TASK STATUS", data: { item, taskStatus: "completed" } });
      setIsChecked(false);
    }, 200);
  };
  const deleteFromBoard = (item) => {
    dispatch({ type: "DELETE TASK", data: { item } });
  };

  return (
    <div
      className={` ${
        item.taskStatus === "completed" ? "done" : "progress"
      } task-card`}
    >
      {isEdited ? (
        <EditedTaskCard item={item} setIsEdited={setIsEdited} />
      ) : (
        <ContentTaskCard
          item={item}
          isChecked={isChecked}
          addToCompleted={addToCompleted}
          deleteFromBoard={deleteFromBoard}
          setIsEdited={setIsEdited}
        />
      )}
    </div>
  );
};

export default TaskCard;

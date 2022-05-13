import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import InputArea from "../../components/InputArea/InputArea";
import { useDispatchTask } from "../../data/Task";
import { useCategory } from "../../data/Category";
import "./NewTask.scss";

const NewTaskCard = (params) => {
  const taskCategories = useCategory();
  const dispatch = useDispatchTask();

  const [error, setError] = useState({ status: false, message: "" });
  const [task, setTask] = useState({
    taskCategory: taskCategories[0],
    taskTitle: "",
    taskDescription: "",
  });

  let style = task.taskTitle.length > 0 ? { backgroundColor: "#34D2D8" } : {};

  const addToList = () => {
    const taskData = { ...task, taskStatus: "task" };
    setError((prevState) => {
      return { status: false, message: "" };
    });
    dispatch({ type: "ADD TASK", data: taskData });
    setTask({
      taskCategory: taskCategories[0],
      taskTitle: "",
      taskDescription: "",
    });
  };

  const checkInput = () => {
    if (task.taskTitle.length > 0) {
      addToList();
    } else {
      setError((prevState) => {
        return { status: true, message: "Task Title is Required" };
      });
    }
  };

  const setChange = (option, value) => {
    setTask((prevState) => {
      return { ...prevState, [option]: value };
    });
  };

  return (
    <>
      <div className="new-task-card-wrapper">
        <div>
          <h4>Create New Task</h4>
          {error.status && <p class="error-text">{error.message}</p>}
        </div>
        <div className="new-task-card-wrapper-header">
          <div ClassName="new-title">
            <Input
              id="taskTitle"
              label="task title"
              value={task.taskTitle}
              setChange={(value) => setChange("taskTitle", value)}
            />
          </div>
          <Dropdown
            value={task.taskCategory}
            setChange={(value) => setChange("taskCategory", value)}
          />
        </div>
        <div classname="new-description">
          <p>Description</p>
          <InputArea
            id="taskDescription"
            label="write your task description here"
            value={task.taskDescription}
            setChange={(value) => setChange("taskDescription", value)}
          />
        </div>
          <button onClick={checkInput} style={style}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTaskCard;

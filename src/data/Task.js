import React, { useReducer, useContext, createContext } from "react";

const TaskStateContext = createContext();
const TaskDispatchContext = createContext();
let taskId = 0;

const addTask = (state, info) => {
  const newData = {
    taskId: taskId,
    taskTitle: info.taskTitle,
    taskDescription: info.taskDescription,
    taskStatus: info.taskStatus,
    taskCategory: info.taskCategory,
  };
  taskId++;
  return { ...state, task: [newData, ...state.task] };
};

const updateTaskStatus = (state, info) => {
  const newData = {
    ...info.item,
    taskStatus: info.taskStatus,
  };
  let deleteTaskStatus = state[info.item.taskStatus].filter(
    (item) => item.taskId !== info.item.taskId
  );
  let newStatus = [newData, ...state[info.taskStatus]];
  return {
    ...state,
    [info.taskStatus]: [...newStatus],
    [info.item.taskStatus]: [...deleteTaskStatus],
  };
};

const updateTask = (state, info) => {
  console.log(info.item);
  const newState = state[info.item.taskStatus].map((key) => {
    if (key.taskId === info.item.taskId) {
      return { ...info.item };
    } else {
      return { ...key };
    }
  });
  return {
    ...state,
    [info.item.taskStatus]: [...newState],
  };
};

const deleteTask = (state, info) => {
  let deleteTaskStatus = state[info.item.taskStatus].filter(
    (item) => item.taskId !== info.item.taskId
  );
  return {
    ...state,
    [info.item.taskStatus]: [...deleteTaskStatus],
  };
};

const intialState = {
  task: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TASK":
      return addTask(state, action.data);
    case "UPDATE TASK STATUS":
      return updateTaskStatus(state, action.data);
    // eslint-disable-next-line no-duplicate-case
    case "UPDATE TASK":
      return updateTask(state, action.data);
    case "DELETE TASK":
      return deleteTask(state, action.data);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <TaskDispatchContext.Provider value={dispatch}>
      <TaskStateContext.Provider value={state}>
        {children}
      </TaskStateContext.Provider>
    </TaskDispatchContext.Provider>
  );
};

export const useTask = () => useContext(TaskStateContext);
export const useDispatchTask = () => useContext(TaskDispatchContext);

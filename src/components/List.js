import React from "react";
import { useTask } from "../data/Task";

const List = () => {
  const taskItem = useTask();
  return (
    <ul>
      {taskItem.map((item, i) => (
        <li key={i}>{item.taskCategory}</li>
      ))}
    </ul>
  );
};

export default List;

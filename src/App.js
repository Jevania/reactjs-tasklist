import { useState } from "react";

import CompletedTaskWrapper from "./view/TaskWrapper/CompletedTaskWrapper";
import TaskWrapper from "./view/TaskWrapper/TaskWrapper";
import Background from "./view/Background/Background";
import Header from "./view/Header/Header";
import Status from "./data/TaskStatus";

import { useCategory } from "./data/Category";
import { useTask } from "./data/Task";

import "./App/style/App.css";
import "./App/style/Style.css";

const App = () => {
  const data = useTask();
  const taskCategories = ["See All", ...useCategory()];
  const [filter, setFilter] = useState(taskCategories[0]);
  const changeFilter = (item) => {
    setFilter(item);
  };
  const filterData = (data, option) => {
    if (option === "See All") {
      return data;
    } else {
      return data.filter((item) => item.taskCategory === option);
    }
  };
  const taskData = filterData(data["task"], filter);
  const completedData = filterData(data["completed"], filter);

  return (
    <div className="wrapper">
      <div> </div>

      <div>
        <Header
          filter={filter}
          setFilter={changeFilter}
          filterItem={taskCategories}
        />
        <div className="task-list-wrapper">
          {Status.map((item, i) => {
            if (item.content === "completed") {
              return (
                <CompletedTaskWrapper
                  Status={item.content}
                  listTitle={item.listTitle}
                  data={completedData}
                  key={i}
                />
              );
            } else {
              return (
                <TaskWrapper
                  data={taskData}
                  Status={item.content}
                  listTitle={item.listTitle}
                  key={i}
                />
              );
            }
          })}
        </div>
      </div>
      <Background />
    </div>
  );
};

export default App;

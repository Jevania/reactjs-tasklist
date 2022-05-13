import { useState } from "react";
import EmptyTask from "../Status/EmptyTask";
import TaskCard from "../TaskCard/TaskCard";
import NewTask from "../NewTask/NewTask";
import Popup from "./Popup";
import "./TaskWrapper.scss";

const TaskWrapper = ({ data, status, listTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="task-wrapper">
      <input className="button-add-task"
        type="button"
        value="+"
        onClick={togglePopup} 
      />
      {isOpen && <Popup
        content={<>
          <NewTask />
        </>}
        handleClose={togglePopup}
      />}

      <p class="task-wrapper-title">{listTitle}</p>
      <div className="task-list-wrapper-1">
        <div className="task-list">
          {data.length > 0 ? (
            data.map((value, i) => <TaskCard item={value} key={i} />)
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskWrapper;

import { useState } from "react"; 
import EmptyCompleted from "../Status/EmptyCompleted";
import TaskCard from "../TaskCard/TaskCard";
import NewCategory from "../NewCategory/NewCategory";
import Popup from "./Popup";
import "./TaskWrapper.scss";

const CompletedTaskWrapper = ({ data, status, listTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="task-wrapper">
      <input className="button-add-category"
        type="button"
        value="+"
        onClick={togglePopup}
      />
      {isOpen && <Popup
        content={<>
          <NewCategory />
        </>}
        handleClose={togglePopup}
      />}
      
      <p class="task-wrapper-title">{listTitle}</p>
      <div className="task-list-wrapper-1">
        <div className="task-list">
          {data.length > 0 ? (
            data.map((value, i) => <TaskCard item={value} key={i} />)
          ) : (
            <EmptyCompleted />
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskWrapper;

import { PlusCircle } from "react-feather";

const EmptyTask = () => {
  return (
    <div className={`progress task-card`}>
      <div className="task-card-wrapper">
        <div className="task-card-check">
          <h4>Your Task List is still empty!</h4>
        </div>
        <p className="item-description">
          start clicking   <PlusCircle />  button to add new task🤩
        </p>
      </div>
    </div>
  );
};

export default EmptyTask;

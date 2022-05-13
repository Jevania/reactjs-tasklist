const EmptyCompleted = () => {
  return (
    <div className={`done task-card`}>
      <div className="task-card-wrapper">
        <div className="task-card-check">
          <h4>You haven't finished anything yet!</h4>
        </div>
        <p className="item-description">let's start now and be productive together!😋</p>
      </div>
    </div>
  );
};

export default EmptyCompleted;

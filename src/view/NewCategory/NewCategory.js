import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { useDispatchCategory } from "../../data/Category";
import "./NewCategory.scss";

const NewCategory = (params) => {
  const [error, setError] = useState({ status: false, message: "" });
  const [taskCategory, setCategory] = useState("");

  const dispatch = useDispatchCategory();

  const addCategory = () => {
    dispatch({ type: "ADD", data: taskCategory
  });
    setCategory("");
    setError({ status: false, message: "" });
  };

  const checkInput = () => {
    if (taskCategory.length > 0) {
      addCategory();
    } else {
      setError((prevState) => {
        return { status: true, message: "New Category is Required" };
      });
    }
  };

  return (
    <>
      <div className="new-category-wrapper">
        <div className="text">
          <h4>Create New Category</h4>
          {error.status ? (
            <p class="error-text">{error.message}</p>
          ) : (
            <p>Add new Category:</p>
          )}
        </div>
        <div className="new-category-wrapper-header">
          <Input
            id="taskCategory"
            label="Category"
            value={taskCategory}
            setChange={(value) => setCategory(value)}
          />
        </div>
        <button
          onClick={checkInput}
          className={`${taskCategory.length > 0 && "bg-orange"}`}
        >
          Add Category
        </button>
      </div>
    </>
  );
};

export default NewCategory;

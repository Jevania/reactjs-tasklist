import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import "./DropdownStatic.css";
import { useCategory } from "../../data/Category";

const DropdownStatic = () => {
  const taskCategories = useCategory();
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="dropdown-static">
      <div className="dropdown-static-header" onClick={toggleDropdown}>
        {"All Category"}
        <i className="dropdown-static-icon ">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </i>
        <div className={`dropdown-static-body ${isOpen && "open"}`}>
          {taskCategories.map((item, i) => (
            <div className="dropdown-static-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownStatic;

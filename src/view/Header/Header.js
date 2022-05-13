import DropdownFilter from "../../components/Dropdown/DropdownFilter";
import "./Header.css";

const Header = ({ filter, setFilter, filterItem }) => {

  return (
    <div className="header">
      <h2>task list</h2>
      <div className="filter">
        <DropdownFilter
          value={filter}
          setChange={setFilter}
          filterItem={filterItem}
        />
      </div>
    </div>
  );
};

export default Header;

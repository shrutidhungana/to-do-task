
import PropTypes from "prop-types";
import "./styles.css";

const FilterDropdown = ({ currentFilter, setFilter }) => {
  const filters = [
    { label: "All TODOs", value: "ALL" },
    { label: "Completed TODOs", value: "COMPLETED" },
    { label: "Incomplete TODOs", value: "INCOMPLETE" },
  ];

  return (
    <div className="filter-dropdown">
      <label htmlFor="filter" className="filter-label">
        Filter Tasks:
      </label>
      <select
        id="filter"
        value={currentFilter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        {filters?.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterDropdown.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterDropdown;

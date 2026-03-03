import PropTypes from "prop-types";
import TasksFilter from "./TasksFilter";
import propTypes from "prop-types";

const Footer = ({ filter, setFilter, clearCompletedTasks, itemsLeft }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} item left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  clearCompletedTasks: PropTypes.func,
  itemsLeft: PropTypes.number,
};

Footer.defaultProps = {
  filter: "all",
  itemsLeft: 0,
};

export default Footer;

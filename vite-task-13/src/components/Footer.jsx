import TasksFilter from "./TasksFilter";

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

export default Footer;

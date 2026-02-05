import TasksFilter from "./TasksFilter";

const Footer = ({ filter, setFilter, clearCompletedTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 item left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

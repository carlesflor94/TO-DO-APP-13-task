import TasksFilter from "./TasksFilter";

const Footer = ({ filter, setFilter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">1 item left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;

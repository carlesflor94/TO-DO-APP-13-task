import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  changeState,
  handleDelete,
  editTaskDescription,
}) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          changeState={changeState}
          handleDelete={handleDelete}
          editTaskDescription={editTaskDescription}
          task={task}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  changeState: PropTypes.func,
  handleDelete: PropTypes.func,
  editTaskDescription: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;

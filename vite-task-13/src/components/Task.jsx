import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Task = ({ task, changeState, handleDelete, editTaskDescription }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  let createdTime;

  if (task.time) {
    createdTime = formatDistanceToNow(task.time, { addSuffix: true });
  } else {
    createdTime = "";
  }

  function handleTaskClick() {
    changeState(task.id);
  }

  function handleEdit(e) {
    setEditedTask(e.target.value);
  }

  function changeEdit(e) {
    if (e.key === "Enter") {
      editTaskDescription(task.id, editedTask);
      setEditing(false);
    }
  }

  return (
    <li
      className={
        (task.completed ? "completed" : "") + (editing ? "editing" : "")
      }
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={handleTaskClick}
        />

        <label>
          <span className="description">{task.title}</span>
          <span className="created">created {createdTime}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => {
            setEditedTask(task.title);
            setEditing(true);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => handleDelete(task.id)}
        ></button>
      </div>

      {/* enable editing mode */}
      {editing && (
        <input
          className="edit"
          value={editedTask}
          autoFocus
          onChange={handleEdit}
          onKeyDown={changeEdit}
        />
      )}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
    time: PropTypes.number,
  }),
  changeState: PropTypes.func,
  handleDelete: PropTypes.func,
  editTaskDescription: PropTypes.func,
};

Task.defaultProps = {
  task: {
    id: "",
    title: "",
    completed: false,
    time: null,
  },
};

export default Task;

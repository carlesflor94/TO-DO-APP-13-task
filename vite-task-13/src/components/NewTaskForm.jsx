import { addWithOptions } from "date-fns/fp";
import { useState } from "react";

const NewTaskForm = ({ addTask }) => {
  const [userTask, setUserTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userTask);
    setUserTask("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={userTask}
          onChange={(e) => setUserTask(e.target.value)}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;

import { useState } from "react";

const NewTaskForm = ({ addTask }) => {
  const [userTask, setUserTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: userTask,
      completed: false,
    };

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => {
      setUserTask("");
      addTask();
    });
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

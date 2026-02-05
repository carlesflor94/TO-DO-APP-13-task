import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  //task data & add new task
  const [tasks, setTasks] = useState([]);

  function fetchTasks() {
    fetch("http://localhost:8000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  //change state to completed
  function changeState(id) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  }

  //delete Task
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  //edit task
  function editTaskDescription(id, newDescription) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.title = newDescription;
    setTasks(newTasks);
  }

  return (
    <section className="todoapp">
      <NewTaskForm addTask={fetchTasks} />

      <section className="main">
        {tasks && (
          <TaskList
            tasks={tasks}
            changeState={changeState}
            handleDelete={handleDelete}
            editTaskDescription={editTaskDescription}
          />
        )}
        <Footer />
      </section>
    </section>
  );
}

export default App;

import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import TasksFilter from "./components/TasksFilter";
import { v4 as uuidv4 } from "uuid";

function App() {
  //task data & add new task
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  //filters
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.completed;
    } else {
      return task.completed;
    }
  });

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

  //delete all completed tasks (clear all function)
  function clearCompletedTasks() {
    const completedTasks = task.filter((task) => task.completed);

    Promise.all(
      completedTasks
        .map((task) =>
          fetch(`http://localhost:8000/tasks/${task.id}`, {
            method: "DELETE",
          }),
        )
        .then(() => {
          setTasks(tasks.filter((task) => !task.completed));
        }),
    );
  }

  return (
    <section className="todoapp">
      <NewTaskForm addTask={fetchTasks} />

      <section className="main">
        {tasks && (
          <TaskList
            tasks={filteredTasks}
            changeState={changeState}
            handleDelete={handleDelete}
            editTaskDescription={editTaskDescription}
          />
        )}

        <Footer
          filter={filter}
          setFilter={setFilter}
          clearCompletedTasks={clearCompletedTasks}
        />
      </section>
    </section>
  );
}

export default App;

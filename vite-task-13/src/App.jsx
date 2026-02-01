import { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //task data
  const [tasks, setTasks] = useState([
    { id: uuidv4(), description: 'New task', time: new Date(), complete: false },
  ]);

  //change state to completed
  function changeState(id) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }

  //delete Task
  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <section className="todoapp">
      <NewTaskForm />

      <section className="main">
        <TaskList tasks={tasks} changeState={changeState} handleDelete={handleDelete}/>
        <Footer />
      </section>
    </section>
  );
}

export default App;

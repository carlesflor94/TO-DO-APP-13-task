import { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), description: 'New task', time: new Date(), complete: false },
  ]);

  return (
    <section className="todoapp">
      <NewTaskForm />

      <section className="main">
        <TaskList tasks={tasks} />
        <Footer />
      </section>
    </section>
  );
}

export default App;

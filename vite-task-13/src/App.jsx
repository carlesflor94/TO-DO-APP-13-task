import { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([
    { description: 'New task', time: new Date() },
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

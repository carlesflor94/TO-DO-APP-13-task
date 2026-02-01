import Task from './Task'

const TaskList = ({ tasks }) => {
    return (
        <ul className="todo-list">
          {tasks.map((task, index) => (
                <Task key={task.id} task={task}/>
            ))}
        </ul>
    );
}
 
export default TaskList;
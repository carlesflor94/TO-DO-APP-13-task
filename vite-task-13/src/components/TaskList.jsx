import Task from './Task'

const TaskList = ({ tasks }) => {
    return (
        <ul className="todo-list">
          {tasks.map((task, index) => (
                <Task key={index} task={task}/>
            ))}
        </ul>
    );
}
 
export default TaskList;
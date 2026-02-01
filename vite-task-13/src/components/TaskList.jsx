import Task from './Task'

const TaskList = ({ tasks, changeState }) => {
    return (
        <ul className="todo-list">
          {tasks.map((task, index) => (
                <Task key={task.id} changeState={changeState} task={task}/>
            ))}
        </ul>
    );
}
 
export default TaskList;
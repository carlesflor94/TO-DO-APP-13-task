import Task from './Task'

const TaskList = ({ tasks, changeState, handleDelete }) => {
    return (
        <ul className="todo-list">
          {tasks.map((task) => (
                <Task key={task.id} changeState={changeState} handleDelete={handleDelete} task={task}/>
            ))}
        </ul>
    );
}
 
export default TaskList;
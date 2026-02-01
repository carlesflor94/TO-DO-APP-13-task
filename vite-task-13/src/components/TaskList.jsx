import Task from './Task'

const TaskList = ({ tasks, changeState, handleDelete, editTaskDescription }) => {
    return (
        <ul className="todo-list">
          {tasks.map((task) => (
                <Task key={task.id} changeState={changeState} handleDelete={handleDelete} editTaskDescription={editTaskDescription} task={task}/>
            ))}
        </ul>
    );
}
 
export default TaskList;
import { format } from 'date-fns'

const Task = ({ task, changeState, handleDelete, editTaskDescription }) => {

    const stringDate = format(task.time, 'PPpp')

    function handleTaskClick() {
      changeState(task.id)
    }

    return (
        <li className={task.complete ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={task.complete} onChange={handleTaskClick}/>
              <label>
                <span className="description">{task.description}</span>
                <span className="created">created {stringDate}</span>
              </label>
              <button className="icon icon-edit" onClick={() => editTaskDescription(task.id)}></button>
              <button className="icon icon-destroy" onClick={() => handleDelete(task.id)}></button>
            </div>
          </li>
    );
}
 
export default Task;
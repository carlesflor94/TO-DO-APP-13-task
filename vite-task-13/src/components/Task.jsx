import { useState } from 'react'
import { format } from 'date-fns'

const Task = ({ task, changeState, handleDelete, editTaskDescription }) => {

    const stringDate = format(task.time, 'PPpp');

    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);

    function handleTaskClick() {
      changeState(task.id)
    }

    function handleEdit(e) {
      setEditedTask(e.target.value)
    }

    function changeEdit(e) {
      if (e.key === 'Enter') {
        editTaskDescription(task.id, editedTask)
        setEditing(false);
      }
    }

    return (
        <li className={task.complete ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={task.complete} onChange={handleTaskClick}/>
              {!editing ? (
                <label>
                  <span className="description">{task.description}</span>
                  <span className="created">created {stringDate}</span>
              </label>
              ) : (
                <input className="edit" value={editedTask} autoFocus onChange={handleEdit} onKeyDown={changeEdit} />
              )
            }
              
              <button className="icon icon-edit" onClick={() => {
                    setEditedTask(task.description)
                    setEditing(true)
                  }}>
                </button>
              <button className="icon icon-destroy" onClick={() => handleDelete(task.id)}></button>
            </div>
          </li>
    );
}
 
export default Task;
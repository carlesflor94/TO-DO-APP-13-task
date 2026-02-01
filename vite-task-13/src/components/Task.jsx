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
        <li className={
          (task.complete ? 'completed' : '') +
          (editing ? 'editing' : '')
          }>
            <div className="view">
              <input className="toggle" type="checkbox" checked={task.complete} onChange={handleTaskClick}/>
              
                <label>
                  <span className="description">{task.description}</span>
                  <span className="created">created {stringDate}</span>
                </label>
              
              <button className="icon icon-edit" onClick={() => {
                    setEditedTask(task.description)
                    setEditing(true)
                  }}>
                </button>
              <button className="icon icon-destroy" onClick={() => handleDelete(task.id)}></button>
            </div>

            {/* enable editing mode */}
            {editing && (
              <input className="edit" value={editedTask} autoFocus onChange={handleEdit} onKeyDown={changeEdit} />
            )}
          </li>
    );
}
 
export default Task;
import { format } from 'date-fns'

const Task = ({ task }) => {

    const stringDate = format(task.time, 'PPpp')

    return (
        <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{task.description}</span>
                <span className="created">created {stringDate}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
    );
}
 
export default Task;
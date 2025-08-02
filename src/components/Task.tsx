
import type { TaskProps } from '../libs/types';

function Task({  title, description, isDone }: TaskProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <h5 className={`card-title ${isDone ? 'text-decoration-line-through text-success' : ''}`}>
              {title}
            </h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <p className={`card-text ${isDone ? 'text-muted' : ''}`}>{description}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-success me-2">{isDone ? 'Undone' : 'Done'}</button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 

export default Task;

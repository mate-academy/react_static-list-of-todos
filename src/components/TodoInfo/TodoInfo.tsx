import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props2 = {
  taskInfo: Todo;
};

export const TodoInfo: React.FC<Props2> = ({ taskInfo }) => (
  <div className="Task">
    <div>
      <span className="Task__name">Task: </span>
      {taskInfo.title}
    </div>
    <div>
      <span>Task status: </span>
      {taskInfo.completed === true
        ? <span className="Task__status--completed">completed</span>
        : <span className="Task__status--not-completed">still not completed</span>}
    </div>
  </div>
);

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  taskList: Todo[];
};

export const TodoList: React.FC<Props> = ({ taskList }) => (
  <ul className="Tasklist">
    {taskList.map(taskListItem => (
      <li key={taskListItem.id} className="Tasklist__item">
        <TodoInfo taskInfo={taskListItem} />
      </li>
    ))}
  </ul>
);

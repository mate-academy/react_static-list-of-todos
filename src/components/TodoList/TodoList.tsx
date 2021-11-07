import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import './TodoList.scss';

type Props = {
  taskList: Todo[];
};

export const TodoList: React.FC<Props> = ({ taskList }) => (
  <ul className="Tasklist">
    {taskList.map(taskListItem => (taskListItem.user && (
      <li key={taskListItem.id} className="Tasklist__item">
        <TodoInfo taskInfo={taskListItem} />
        <UserInfo userInfo={taskListItem.user} />
      </li>
    )))}
  </ul>
);

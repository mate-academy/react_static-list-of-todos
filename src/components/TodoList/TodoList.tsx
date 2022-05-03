import { Todo } from '../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="preparedTodos">
    {preparedTodos.map(
      ({
        id, userId, title, completed, user,
      }) => (
        <li
          key={id}
          className="TodoInfo {
"
        >
          <TodoInfo
            key={id}
            userId={userId}
            id={id}
            title={title}
            completed={completed}
            user={user}
          />
        </li>
      ),
    )}
  </ul>
);

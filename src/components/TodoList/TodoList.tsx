import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todo) => (
      <li
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          },
        )}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

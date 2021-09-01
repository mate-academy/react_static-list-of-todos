import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface PreparedTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

type Props = {
  todos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames(
          'todoList__item',
          {
            'todoList__item--done': todo.completed,
          },
        )}
      >
        {todo.user && <UserInfo {...todo.user} />}
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);

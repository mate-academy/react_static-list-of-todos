import classNames from 'classnames';

import { UserInfo } from './UserInfo';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

import '../styles/TodoList.scss';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = props => {
  const { todos } = props;

  return (
    <ul
      className="todo-list"
    >
      {todos.map(item => {
        const { user } = item;

        return user && (
          <li
            key={item.id}
            className={classNames(
              'todo-list__item',
              {
                'todo-list__item--completed': item.completed,
              },
            )}
          >
            <UserInfo {...user} />
            <TodoInfo
              title={item.title}
              completed={item.completed}
            />
          </li>
        );
      })}
    </ul>
  );
};

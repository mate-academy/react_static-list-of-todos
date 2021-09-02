import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../../UserInfo';
import { TodoInfo } from '../../TodoInfo';
import './TodoList.scss';

export type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="cards">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames(
            'cards__item', { cards__item_done: (todo.user ? todo.completed : '') },
          )}
        >
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todoinfo={todo} />}
        </li>
      ))}
    </ul>
  );
};

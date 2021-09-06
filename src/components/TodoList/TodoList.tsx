import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

export type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="cards">
      <li className="cards__header">
        <h2 className="cards__info">
          <span>Name</span>
          <span>Email</span>
          <span>Task</span>
          <span>Status</span>
          <span>Username</span>
        </h2>
      </li>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames(
            'cards__item',
            { cards__item_done: (todo.user && todo.completed) },
          )}
        >
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todoinfo={todo} />}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import './TodoList.scss';

import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li
        className={
          todo.completed
            ? 'list__item list__item--done'
            : 'list__item'
        }
        key={todo.id}
      >
        {todo.user && <UserInfo user={todo.user} />}
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

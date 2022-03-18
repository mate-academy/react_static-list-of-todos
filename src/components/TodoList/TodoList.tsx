import React from 'react';

import { PreparedTodos } from '../../types/PreparedTodos';

import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todos: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list__list">
    {todos.map(todo => (
      <li
        className="todo-list__list-item"
        key={todo.id}
      >
        <UserInfo user={todo.user} />
        <TodoInfo title={todo.title} completed={todo.completed} />
      </li>
    ))}
  </ul>
);

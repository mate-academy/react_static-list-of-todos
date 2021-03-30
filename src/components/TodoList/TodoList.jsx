import React from 'react';

import { Todo } from '../Todo';

import './todoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="list__card">
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

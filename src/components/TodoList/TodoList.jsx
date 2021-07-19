import React from 'react';
import './TodoList.css';
import { Todo } from '../Todo/Todo';
import { User } from '../User/User';

export const TodoList = preparedTodos => (
  <ul className="list list-group">
    {preparedTodos.todos.map(todo => (
      <li className="list-group-item" key={todo.id}>
        <Todo title={todo.title} completed={todo.completed} />
        {' | '}
        <User user={todo.user.name} />
      </li>
    ))}
  </ul>
);

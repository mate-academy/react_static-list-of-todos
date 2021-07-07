import React from 'react';
import { Todo } from '../Todo';
import { TodoType } from '../../types';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className="todo-list__item"
      >
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = TodoType.isRequired;

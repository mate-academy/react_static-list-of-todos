import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { todoType } from '../../types';
import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="todoList__item">
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoType).isRequired,
};

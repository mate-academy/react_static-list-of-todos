import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.map(todo => (
        <li className="list__item todo">
          <Todo todo={todo} key={todo.id} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <ul className="data-list">
      {todos.map(todo => (
        <li className="data-li" key={todo.id}>
          <span className="data-task">
            Task:
          </span>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todos: [],
};

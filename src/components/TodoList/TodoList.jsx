import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <ul className="data-list">
      {todos.map(el => (
        <li className="data-li" key={el.id}>
          <Todo {...el} />
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
  ).isRequired,
};

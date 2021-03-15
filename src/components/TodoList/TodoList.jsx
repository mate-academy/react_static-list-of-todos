import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.css';

export function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.map(properties => (
        <li key={properties.id} className="list__item item">
          <Todo {...properties} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

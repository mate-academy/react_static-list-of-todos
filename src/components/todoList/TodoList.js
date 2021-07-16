import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../todo';

export const TodoList = ({ entries }) => (
  <ul className="list">
    {entries.map(entry => (
      <li className="card" key={entry.id}>
        <Todo {...entry} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

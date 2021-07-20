import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed, user }) => (
  <li className="card">
    <h2 className="card__title">{title}</h2>
    <p className="card__status">
      <strong>Status:</strong>
      {`${completed ? ` done` : ` in progress`}`}
    </p>
    <span className="card__user">
      <strong>User:</strong>
      {' '}
      {user}
    </span>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div
    className="todo"
  >
    <p>{user.name}</p>
    <p>{title}</p>
    <p
      className={`${completed ? 'complete' : 'not-complete'}`}
    >
      {completed ? 'Completed' : 'Not completed'}
    </p>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

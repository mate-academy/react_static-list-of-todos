import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <User {...user} />
    <p>
      {title}
    </p>
    <input
      type="checkbox"
      checked={completed}
    />
  </div>
);

Todo.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape = {
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    },
  ).isRequired,
};

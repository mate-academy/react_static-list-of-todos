import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="todo">
      <h2>Todo:</h2>
      <em>{title}</em>
      <h2>Status:</h2>
      <em>{completed ? 'Completed' : 'Not completed'}</em>
      <User user={user} />
    </div>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <p>
    <strong>User:</strong>
    &ensp;
    <User user={user} />
    &emsp;
    <strong>Task:</strong>
    &ensp;
    {title}
    &emsp;
    <strong>Status:</strong>
    &ensp;
    {completed ? 'Done.' : 'In progress...'}
  </p>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;

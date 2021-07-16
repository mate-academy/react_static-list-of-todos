import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ todo }) => (
  <p>
    Status:
    {todo.completed ? ' completed' : ' in progress'}
  </p>
);

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
};

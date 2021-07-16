import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ todo }) => (
  <>
    <p>
      Title:
      {' '}
      {todo.title}
    </p>
    <p>
      Status:
      {todo.completed ? ' completed' : ' in progress'}
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};

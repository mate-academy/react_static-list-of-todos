import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ todo }) => {
  let result;

  todo.completed ? result = <span style={{ color: 'blue' }}>completed</span>
    : result = <span style={{ color: 'red' }}>in progress</span>;

  return (
    <>
      {todo.title}
      {' '}
      is
      {' '}
      {result}
    </>
  );
};

Todo.propTypes = { todo: PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}).isRequired };

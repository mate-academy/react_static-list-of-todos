import React from 'react';
import PropTypes from 'prop-types';

const Todo = function({ title, completed }) {
  return (
    <>
      Task:
      {' '}
      {title}
      {' - '}
      Status:
      {' '}
      {`${completed}`}
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;

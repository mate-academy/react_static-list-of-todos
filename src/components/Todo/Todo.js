import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ todo }) => (
  <>
    <p>{todo.title}</p>
    <p>{`${todo.completed}`}</p>
    <p>{todo.user.name}</p>
  </>
);

Todo.defaultProps = {
  todo: {},
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.shape({ name: PropTypes.string }),
  }),
};

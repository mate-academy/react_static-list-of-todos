import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todo }) => (
  <p>
    {todo.title}
    <User user={todo.user} />
  </p>
);

Todo.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      user: PropTypes.objectOf.isRequired,
    }),
  ),
};

Todo.defaultProps = {
  todo: {
    title: '',
    user: {},
  },
};

export default Todo;

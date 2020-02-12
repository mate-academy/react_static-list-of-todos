import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

const Todo = ({ todo }) => (
  <p className="todo-content">
    <span>{todo.title}</span>
    <User user={todo.user} />
  </p>
);

Todo.propTypes = {
  todo: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      user: PropTypes.objectOf.isRequired,
    }),
  ).isRequired,
};

export default Todo;

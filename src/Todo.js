import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ todo }) => (
  <li className={`todo ${todo.completed ? 'done' : 'undone'}`}>
    {todo.title}
    {' - '}
    {todo.completed ? 'completed' : 'processing'}
    {' by '}
    <User user={todo.user} />
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Todo;

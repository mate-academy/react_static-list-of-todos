import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ oneTodo }) => (
  <tr>
    <th>{oneTodo.id}</th>
    <th>{oneTodo.title}</th>
    <th>{oneTodo.completed ? '✅' : '❌'}</th>
    <User user={oneTodo.user} />
  </tr>
);

Todo.propTypes = {
  oneTodo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;

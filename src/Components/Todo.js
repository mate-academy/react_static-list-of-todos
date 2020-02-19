import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ currentTodo }) => {
  const { user, title, completed } = currentTodo;

  return (
    <tr>
      <User user={user} />
      <td>{title}</td>
      <td>{completed ? 'Done' : 'In progress'}</td>
    </tr>
  );
};

Todo.propTypes = {
  currentTodo: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

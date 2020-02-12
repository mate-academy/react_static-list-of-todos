import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ currentTodo }) => (
  <tr>
    <User person={currentTodo.user} />
    <td>{currentTodo.title}</td>
    <td>{currentTodo.completed ? 'Complete' : 'Do it!'}</td>
  </tr>
);

Todo.propTypes = {
  currentTodo: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

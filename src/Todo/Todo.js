import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ todo }) => (
  <tr>
    <User user={todo.user} />
    <td>{todo.title}</td>
    <td>{todo.completed ? 'Done' : 'In process'}</td>
  </tr>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;

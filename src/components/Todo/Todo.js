import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ todoItem: { user, title, completed } }) => (
  <tr>
    <User userObject={user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : '-'}</td>
  </tr>
);

Todo.propTypes = {
  todoItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

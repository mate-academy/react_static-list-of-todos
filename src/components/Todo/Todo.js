import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ id, title, completed, user }) => (
  <tr>
    <td>{id}</td>
    <User user={user} />
    <td>{title}</td>
    <td>{completed ? 'Yes' : 'No'}</td>
  </tr>
);

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

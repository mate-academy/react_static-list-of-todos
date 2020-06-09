import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ id, title, completed, user }) => (
  <tr>
    <td>{id}</td>
    <td>
      <User {...user} />
    </td>
    <td>{title}</td>
    <td>{completed ? 'Complete' : 'Incomplete'}</td>
  </tr>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo({ id, title, completed, user }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{completed ? 'OK' : 'KO'}</td>
      <td>
        <User {...user} />
      </td>
    </tr>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

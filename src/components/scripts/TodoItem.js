import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default function TodoItem({ todo }) {
  const { title, completed, user: { email, name } } = todo;
  const tdClassName = completed ? (
    'completed'
  ) : (
    'in-progress'
  );

  return (
    <tr>
      <td>{title}</td>
      <td><User name={name} /></td>
      <td>{email}</td>
      <td className={tdClassName}>
        {completed ? 'Completed' : 'In progress' }
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

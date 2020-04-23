import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ todo }) => {
  const { id, title, completed, user } = todo;

  return (
    <tr>
      <td>{id}</td>
      <User user={user} />
      <td>{title}</td>
      <td>{completed ? 'Yes' : 'No'}</td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

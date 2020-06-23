import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = (props) => {
  const { todo: { title, completed, user } } = props;

  return (
    <tr>
      <td>
        <User user={user} />
      </td>
      <td>{title}</td>
      <td>{completed ? 'completed' : 'in progress'}</td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape().isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export function Todo({ preparedTodos }) {
  const { user, title, completed } = preparedTodos;

  return (
    <>
      <User name={user.name} />

      <td>
        {title}
      </td>

      <td className={completed ? 'valid' : 'inValid'}>
        {completed ? 'true' : 'false'}
      </td>
    </>
  );
}

Todo.propTypes = {
  preparedTodos: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

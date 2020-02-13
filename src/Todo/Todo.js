import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export function Todo({ preparedTodos }) {
  return (
    <>
      <User name={preparedTodos.user.name} />

      <td>
        {preparedTodos.title}
      </td>

      <td className={preparedTodos.completed ? 'valid' : 'inValid'}>
        {preparedTodos.completed ? 'true' : 'false'}
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

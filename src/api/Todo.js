import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo({ preparedTodos }) {
  function addClass(status) {
    return status ? 'valid' : 'inValid';
  }

  return (
    <>
      <User name={preparedTodos.user[0].name} />

      <td>
        {preparedTodos.title}
      </td>

      <td className={addClass(preparedTodos.completed)}>
        {preparedTodos.completed ? 'true' : 'false'}
      </td>
    </>
  );
}

Todo.propTypes = {
  preparedTodos: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.name,
    })).isRequired,
  }).isRequired,
};

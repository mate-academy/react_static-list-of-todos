import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo(props) {
  const { preparedTodos } = props;

  function checkStatus(status) {
    return status ? 'true' : 'false';
  }

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
        {checkStatus(preparedTodos.completed)}
      </td>
    </>
  );
}

Todo.propTypes = {
  preparedTodos: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
};

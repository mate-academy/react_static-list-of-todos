import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(({
      title,
      completed,
      user,
      id,
    }) => (
      <Todo
        id={id}
        user={user}
        title={title}
        completed={completed}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        address: PropTypes.shape({}),
        company: PropTypes.shape({}),
        email: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        phone: PropTypes.string,
        username: PropTypes.string,
        website: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

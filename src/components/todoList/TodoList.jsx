import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../todo';

export const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(todo => (
    <div key={todo.id}>
      <Todo {...todo} />
    </div>
  ))
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

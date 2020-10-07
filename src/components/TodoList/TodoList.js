import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
    }),
  ).isRequired,
};

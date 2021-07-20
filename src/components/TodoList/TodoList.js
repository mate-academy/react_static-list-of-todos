import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export function TodoList({ listTodos }) {
  return (
    <ul>
      {listTodos.map(todo => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  listTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  listTodos: [],
};

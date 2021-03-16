import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

function classNames(standard, mutable) {
  return `todo-${standard} ${(mutable) ? 'info-completed' : 'info'}`;
}

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames('info', todo.completed)}
        >
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

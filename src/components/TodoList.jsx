import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

export function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li className="todo-list__item" key={todo.id}>
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
  ),
};

TodoList.defaultProps = {
  todos: [],
};

import React from 'react';
import PropTypes from 'prop-types';
import './Todolist.scss';

import { Todo } from '../todo/Todo';

export const Todolist = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
};

Todolist.defaultProps = {
  todos: [],
};

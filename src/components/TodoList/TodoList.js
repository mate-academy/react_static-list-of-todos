import React from 'react';
import './TodoList.scss';

import PropTypes from 'prop-types';

import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <ul className="todos-list">
    {todos.map(todo => (
      <li className="todo" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

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

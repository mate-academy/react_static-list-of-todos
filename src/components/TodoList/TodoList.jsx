import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './todoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todo__list">
    {todos.map(todo => (
      <li key={todo.id} className="todo__item">
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
  ).isRequired,
};

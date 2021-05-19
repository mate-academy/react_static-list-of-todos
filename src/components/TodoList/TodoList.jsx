import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './todoList.scss';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li className="list" key={todo.id}>
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

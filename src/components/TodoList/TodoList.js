import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li className="todo-list__item" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

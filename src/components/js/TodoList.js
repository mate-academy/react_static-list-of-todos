import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    <li className="todo">
      {todos.map(todo => <Todo todo={todo} />)}
    </li>
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.isRequired,
};

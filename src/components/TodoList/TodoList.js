import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoShape } from '../shapes/Todo';
import './TodoList.css';

export const TodoList = ({ todos }) => (
  <ul className="dodos list-group">
    {todos.map(todo => (
      <li
        key={todo.id}
        className="dodos__item list-group-item list-group-item-action"
      >
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};

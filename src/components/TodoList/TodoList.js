import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TodoTypes } from '../Shape/TodoTypes';

export const TodoList = ({ todos }) => (
  <ul className="list">
    {todos.map(task => (
      <li key={task.id} className="listItem">
        <Todo {...task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    TodoTypes,
  ).isRequired,
};

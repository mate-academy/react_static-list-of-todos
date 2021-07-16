import React from 'react';
import propTypes from 'prop-types';
import { Todo, TodoType } from '../Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <Todo {...preparedTodo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: propTypes.arrayOf(TodoType).isRequired,
};

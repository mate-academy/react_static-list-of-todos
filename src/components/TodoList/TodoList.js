import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Todo</th>
        <th>Stutus</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

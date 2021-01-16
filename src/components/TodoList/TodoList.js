import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoTypes } from '../../types';

export const TodoList = ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>User</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr key={todo.id}>
          <Todo {...todo} />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoTypes).isRequired,
};

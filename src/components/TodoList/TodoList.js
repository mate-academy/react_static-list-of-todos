import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <table className="todo__list">
    <thead>
      <tr>
        <th>task</th>
        <th>user</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr>
          <Todo key={todo.id} {...todo} />
        </tr>
      ))}
    </tbody>
  </table>

);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

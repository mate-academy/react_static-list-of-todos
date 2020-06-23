import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todoList }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Todo</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todoList.map(todo => <Todo key={todo.id} todo={todo} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

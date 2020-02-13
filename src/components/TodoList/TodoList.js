import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todo }) => (
  <table className="todo-list">
    <thead>
      <tr className="todo-list__header">
        <td>Number</td>
        <td>Name</td>
        <td>Task</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {todo.map(object => <Todo todoInfo={object} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todo: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

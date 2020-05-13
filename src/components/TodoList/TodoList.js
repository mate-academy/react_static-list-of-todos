import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todoLists }) => (
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
      {todoLists.map(object => <Todo todoInfo={object} key={object.id} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todoLists: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

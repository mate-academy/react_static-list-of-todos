import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import { TaskType } from '../types';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <table className="table">
    <tr>
      <th className="table__header">User</th>
      <th className="table__header">Task</th>
      <th className="table__header">Status</th>
    </tr>
    {todos.map(todo => (
      <tr key={todo.id}>
        <Todo task={todo} />
      </tr>
    ))}
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TaskType.isRequired).isRequired,
};

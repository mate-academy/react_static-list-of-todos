import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export const TodoList = ({ todosList }) => (
  <table className="table">
    <thead className="table__header">
      <tr>
        <td>Name</td>
        <td>Todo</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody className="table__body">
      {todosList.map(todo => (
        <Todo
          currentTodo={todo}
          key={todo.id}
        />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TodoList;

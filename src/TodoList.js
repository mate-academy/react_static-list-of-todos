import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <table>
    <thead>
      <tr className="header">
        <th>ID</th>
        <th>TITLE</th>
        <th>COMPLETED</th>
        <th>USER</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <Todo key={todo.id} oneTodo={todo} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TodoList;

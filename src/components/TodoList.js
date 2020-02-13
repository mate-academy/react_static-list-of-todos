import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({ todos }) => (

  <table className="container">
    <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>STATUS</th>
        <th>USER</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </tbody>
  </table>

);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

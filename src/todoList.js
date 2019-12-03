import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ todos }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>USER</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </tbody>
  </table>

);

TodoList.propTypes = { todos: PropTypes.string.isRequired };

export default TodoList;

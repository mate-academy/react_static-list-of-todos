/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItems';

function TodoList(props) {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>Completed</th>
        <th>USER</th>
      </tr>
      {props.todos.map(item => (
        <TodoItem todo={item} />
      ))}
    </table>
  );
}

export default TodoList;

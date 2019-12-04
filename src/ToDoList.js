import React from 'react';
import TodoItem from './ToDoItem';

const ToDoList = ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>ToDoList</th>
        <th>User</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </tbody>
  </table>
);

export default ToDoList;

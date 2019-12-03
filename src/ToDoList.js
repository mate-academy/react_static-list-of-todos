import React from 'react';
import TodoItem from './ToDoItem';

const ToDoList = ({ todos }) => (
  <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#FFD700', color: 'white' }}>
        <th style={{ padding: '5px' }}>ToDoList</th>
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

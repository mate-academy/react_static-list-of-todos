import React from 'react';
import './Todo.css';
import TodoItem from './TodoItems';

// eslint-disable-next-line react/prop-types
function TodoList({ todos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>User</th>
        </tr>
      </thead>
      {todos.map(i => (<TodoItem todo={i} key={i.id} />
      ))}
    </table>
  );
}

export default TodoList;

import React from 'react';
import TodoItem from '../TodoItem';

function TodoList({ todos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>TODO item</th>
          <th>User</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;

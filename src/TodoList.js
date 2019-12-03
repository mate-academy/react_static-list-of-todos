import React from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
function TodoList({ todos }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>User name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </tbody>
    </table>
  );
}

export default TodoList;

import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
  return (
    <table className="ui celled table">
      <thead className="thead">
        <tr>
          <th>TODO item</th>
          <th>Status</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;

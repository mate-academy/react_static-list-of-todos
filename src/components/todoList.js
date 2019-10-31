import React from 'react';
import TodoItem from './todoItem';

function TodoList({ todos }) {
  return (
    <div id="wrapper">
      <table className="todo ui celled table">
        <thead className="thead">
          <th>Item</th>
          <th>User</th>
          <th>Completeness</th>
        </thead>
        <tbody>
          {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;

import React from 'react';
import TodoItem from '../todoitem/TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <table className="todo-list">
      <thead className="todo-list__head">
        <th>Title</th>
        <th>Name</th>
        <th>Status</th>
      </thead>
      <tbody>
        {todos.map(todo => <TodoItem todo={todo} />)};
      </tbody>
    </table>
  );
}

export default TodoList;

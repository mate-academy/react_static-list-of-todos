import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="todos-list">
      {todos.map(item => <TodoItem todo={item} key={item.id} />)}
    </div>
  );
}

export default TodoList;

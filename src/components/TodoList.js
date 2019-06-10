import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export function TodoList (props) {
  const {
    todos
  } = props;

  return (
    <table className="todo-list">
      <thead>
        <th>Title</th>
        <th>Is completed</th>
        <th>Name</th>
      </thead>
      <tbody>
        {todos.map(todoWithUser => (
          <TodoItem
            key={todoWithUser.id} 
            title={todoWithUser.title} 
            completed={todoWithUser.completed} 
            user={todoWithUser.user}
          />
        ))}
      </tbody>
    </table>
  )
}


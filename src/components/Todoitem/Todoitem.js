import React from 'react';
import User from '../User/User';
import './todoitem.css';

function Todoitem( {todo, userTodo} ) {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.completed ? 'Completed' : 'No completed'}</p>
      <User user={userTodo} />
    </div>
  );
}

export default Todoitem;

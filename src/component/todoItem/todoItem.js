import './TodoItem.css';
import React from 'react';
import User from '../User/User';

function TodoItem({ todo }) {
  return (
    <div className={`card ${todo.completed ? 'bg-green'
      : 'bg-yellow'}`}>
      <h3 className="card__title">{todo.title}</h3>
      <div className="card__checked">
        <i className="icon far fa-check-square" />
        Completed Task:
        <i className={`icon fas ${todo.completed ? 'checked fa-check'
          : 'unchecked fa-times'}`} />
      </div>
      <User person={todo.user} />
    </div>
  );
}

export default TodoItem;

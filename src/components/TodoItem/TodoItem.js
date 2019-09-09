import React from 'react';
import User from '../User/User';

function TodoItem({todo}) {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className={`todo-list__item ${todo.completed ? 'todo-list__item--is-complete' : ''}`}>
        <h2>{todo.title}</h2>
        <User user={todo.user} />
      </div>
    </div>
  );
}

export default TodoItem;
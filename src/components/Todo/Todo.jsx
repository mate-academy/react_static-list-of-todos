import React from 'react';
import User from '../User/User';
import './Todo.css';

function Todo(todo) {
  return (
    <div className="todo">
      <h2>
        {todo.title}
      </h2>
      <p className="todo__user">
        <strong>
          {
            todo.completed === true
              ? 'completed'
              : 'not completed'
          }
        </strong>
        {` by`}
        <br />
        <User {...todo.user} />
      </p>
    </div>
  );
}

export default Todo;

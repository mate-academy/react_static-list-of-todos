import React from 'react';
import './TodoItem.css';
import User from '../User/User';

const TodoItem = ({ todo }) => (
  <div
    className={
      todo.completed ? 'ui raised link green card' : 'ui raised link red card'
    }
  >
    <div className="content">
      <User user={todo.user} />
      <div className="description">{todo.title}</div>
      {todo.completed ? (
        <i className="check circle outline green icon" />
      ) : (
        <i className="times circle outline red icon" />
      )}
    </div>
  </div>
);

export default TodoItem;

import React from 'react';
import './TodoItem.scss';
import User from '../User/User';

const TodoItem = ({ todo }) => {
  const { id, title, user } = todo;

  return (
    <div className="todo-item">
      <p className="todo-item__title"><span class='digit'>{id}</span></p>
      <p className="todo-item__main-title">{title}</p>
      <User user={user} />
    </div>
  );
}
export default TodoItem;

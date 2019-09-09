import React from 'react';
import { TodoItemProps } from '../constants/PropTypes'
import User from '../User/User';
import './TodoItem.css';

function TodoItem({ todo }) {
  const { title, completed, user } = todo;
  return (
    <li className={completed ? "card green_bg" : "card red_bg"}>
      <div>
        <User data={user} />
      </div>
      <p className="card-text">{title}</p>
    </li>
  );
}

TodoItem.propTypes = TodoItemProps;


export default TodoItem;
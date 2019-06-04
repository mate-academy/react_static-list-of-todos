import React from 'react';
import User from './User.js';
import { users } from './users.js';
import './TodoItem.css';

const TodoItem = props => {
  const currentUser = users.find(user => user.id === props.id);

  return (
    <div className='todo-item'>
      <p className='todo-list__title'>Title: {props.title}</p>
      <p className='todo-list__status'>Status: {props.status.toString()}</p>
      <div>
        <User name={currentUser.name} email={currentUser.email} />
      </div>
      <div className='todo-item__line' />
    </div>
  );
};

export default TodoItem;

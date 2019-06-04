import React from 'react';
import User from './User';
import './TodoItem.css';
import { mapOfUsersTodos } from './TodoList';

const TodoItem = props => {
  const currentUser = mapOfUsersTodos.get(props.id);

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

import React from 'react';
import User from './User.js';

function TodoItem(props) {
  const {
   title: todoTitle,
   completed: status,
   userId: ownerId
  } = props.currentTodo;
 
  const todoItemStatus = status === true ? 'true' : 'false';
  
  return (
    <article>
      <h2>{todoTitle}</h2>
      <User todoOwnerId={ownerId} />
      <h4>{todoItemStatus}</h4>
    </article>
  );
}

export default TodoItem;


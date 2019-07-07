import React from 'react';

export default function TodoItem(props){
  const {todo , user} = props;
  return(
    <div className="todo-item">
      <div>title: {todo.title}</div>
      <div>completed: {`${todo.completed}`}</div>
      {user}
    </div>);
}

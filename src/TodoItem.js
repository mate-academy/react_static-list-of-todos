import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={props.item.completed === true || false}
        className="todo-item__input"
      />

      <span className="todo-item__title">{props.item.title}</span>
      <hr></hr>
      <p>{props.user.username}</p>
    </div>
  );
}

export default TodoItem;
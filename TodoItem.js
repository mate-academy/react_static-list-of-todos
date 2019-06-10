import React from 'react';

function TodoItem(props) {
  return(
    <div className="todo-item">
      <h2>{props.title}</h2>
      <p>{props.user}</p>
      <p>{props.status}</p>
    </div>
  );
}

export default TodoItem;

import React from 'react';
import User from '../User/User';

function TodoItem(props) {
  const {
    title, completed, user, id,
  } = props.todo;

  // console.log(props);

  return (
    <div className="todoList__item">
      <h2>{id}</h2>
      <h4>{title}</h4>
      <input type="checkbox" checked={completed} />
      <User user={user} />
      <p>--------------------------------------</p>
    </div>
  );
}

export default TodoItem;

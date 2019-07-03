import React from 'react';

function TodoItems(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.todo.completed} />
        {props.todo.title}
      </label>
    </li>
  );
}

export default TodoItems;

import React from 'react';
import User from './User';

function TodoItem(props) {
  const { todo } = props;
  return (
    <tr>
      <td><input type="checkbox" checked={todo.completed} /></td>
      <td>{todo.title}</td>
      <User user={todo.user} />
    </tr>
  );
}

export default TodoItem;

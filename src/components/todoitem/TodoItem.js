import React from 'react';
import User from '../user/User';

function TodoItem({ todo }) {

  return (
    <tr>
      <td className="item-title">{todo.title}</td>
      <td className="item-user"><User user={todo.user} /></td>
      <td className="item-status">{todo.completed ? 'true' : 'false'}</td>
    </tr>
  );
}

export default TodoItem;

import React from 'react';
import User from '../User/User';

function TodoItem({ todo: { title, completed } }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{completed ? 'Completed' : 'Working'}</td>
      <td>
        <User user={todo.user} />
      </td>
    </tr>
  );
}

export default TodoItem;

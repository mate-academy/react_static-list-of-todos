import React from 'react';
import User from '../User/User';

function TodoItem({ todo }) {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'Completed' : 'Working'}</td>
      <td>
        <User user={todo.user} />
      </td>
    </tr>
  );
}

export default TodoItem;

import React from 'react';
import User from '../User';

function TodoItem({ todo: { user, title, completed } }) {
  return (
    <tr>
      <td>{title}</td>
      <td>
        <User name={user} />
      </td>
      <td>{completed ? 'Completed' : 'Working'}</td>
    </tr>
  );
}

export default TodoItem;

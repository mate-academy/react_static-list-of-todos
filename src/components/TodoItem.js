import React from 'react';
import User from './User';

function TodoItem({ todo: { user, title, completed } }) {
  return (
    <tr className={completed ? 'positive' : 'negative'}>
      <td>{title}</td>
      <td><User name={user} /></td>
      <td>{completed ? 'Completed' : 'Failed'}</td>
    </tr>
  );
}

export default TodoItem;

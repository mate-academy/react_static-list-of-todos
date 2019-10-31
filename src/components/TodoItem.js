import React from 'react';
import User from './User';

function TodoItem({ todo: { user, title, completed } }) {
  return (
    <tr className={completed ? 'positive' : 'negative'}>
      <td>{title}</td>
      <User user={user} />
      <td>{completed ? 'Completed' : 'Failed'}</td>
    </tr>
  );
}

export default TodoItem;

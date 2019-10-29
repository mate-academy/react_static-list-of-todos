import React from 'react';
import User from './User';

function TodoItem({ todo }) {
  const completeness = todo.completed;

  return (
    <tr className={completeness ? 'positive' : 'negative'}>
      <td>{todo.title}</td>
      <td><User name={todo.user} /></td>
      <td>{completeness ? 'Completed' : 'Failed'}</td>
    </tr>
  );
}

export default TodoItem;

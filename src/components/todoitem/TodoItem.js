import React from 'react';
import './TodoItem.css';
import User from '../user/User';

function TodoItem({ todo }) {
  const { title, completed, user: { email, name } } = todo;
  return (
    <tr>
      <td>{title}</td>
      <td><User name={name} /></td>
      <td>{email}</td>
      <td>{completed.toString()}</td>
    </tr>
  );
}

export default TodoItem;

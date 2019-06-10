import React from 'react';
import { User } from './User';
import './TodoItem.css'

export function TodoItem(props) {
  const {
    title,
    completed,
    user,
  } = props;

  return (
    <tr>
      <td className="title">
        <p>{title}</p>
      </td>
      <td className={completed ? 'completed' : 'not-completed'}>
      </td>
      <td>
        <User name={user.name} />
      </td>
    </tr>
  );
} 
  
import React from 'react';
import { ShapeTodoItem } from './Shape';

export default function TodoItem({ todo }) {
  const { title, completed, user: { email, name } } = todo;
  const tdClassName = completed ? (
    'completed'
  ) : (
    'in-progress'
  );

  return (
    <tr>
      <td>{title}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td className={tdClassName}>
        {completed ? 'Completed' : 'In progress' }
      </td>
    </tr>
  );
}

TodoItem.propTypes = ShapeTodoItem.isRequired;

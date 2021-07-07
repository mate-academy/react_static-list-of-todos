import React from 'react';
import User from './User';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td className="todos">{props.title}</td>
      <td>{props.completed ? 'yes' : 'no'}</td>
      <User {...props.user} />
    </tr>
  );
}

export default TodoItem;

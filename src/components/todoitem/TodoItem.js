import React from 'react';
import User from '../user/User';

function TodoItem({todo}) {
  const {title, completed, user: {email, name}} = todo;
  const tdClassName = completed ? (
      'positive'
    ) : (
      'negative'
    );

  const completedIcon = completed ? (
    <i className="icon checkmark"></i>
  ) : (
    <i className="icon close"></i>
  );

  return (
    <tr>
      <td>{title}</td>
      <td><User name={name} /></td>
      <td>{email}</td>
      <td className= {tdClassName}>{completedIcon}{completed.toString()}</td>
    </tr>
  )
}



export default TodoItem;

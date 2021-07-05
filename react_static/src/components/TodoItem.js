import React from 'react';
import User from './User';

function TodoItem(props) {
  const user = props.user;
  return (
    <tr>
      <td>
        {props.title}
      </td>
      <User name={user.name} email={user.email}/>
      <td>
        {props.completed.toString()}
      </td>
    </tr>
  )
}

export default TodoItem;

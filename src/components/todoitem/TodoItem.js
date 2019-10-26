import React from 'react';
import User from '../user/User';

function TodoItem(props) {
  return (
    <tr>
      <td>{props.todo.title}</td>
      <td><User user={props.todo.user} /></td>
      <td>{props.todo.user.email}</td>
      <td className={props.todo.completed ? 'positive' : 'negative'}>
        {props.todo.completed ? <i className="icon checkmark"></i>
          :<i className="icon close"></i>}{props.todo.completed.toString()}</td>
    </tr>
  )
}



export default TodoItem;

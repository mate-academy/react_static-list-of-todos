import React from 'react';
import User from './User';
import { users } from '../users';
import './TodoItem.css';


function TodoItem(props) {
  const owner = users.find((user) => user.id === props.userId).name;

  return (
    <tr key={props.title}>
      <td>{props.title}</td>
      <td>{`${props.completed}`}</td>
      <User name={owner} />
    </tr>
  );
}

export default TodoItem;
/* eslint-disable react/prop-types */
import React from 'react';
import User from './Users';

function TodoItem(props) {
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.title}</td>
      <td>{props.todo.completed ? 'Yep' : 'Nope'}</td>
      <User person={props.todo.user} />
    </tr>
  );
}

export default TodoItem;

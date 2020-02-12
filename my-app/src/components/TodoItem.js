import React from 'react';
import User from './User';
import {todos} from '../todos';
import {users} from '../users';

export default function ToDoItem(props) {
  let user = null;
  for (const todo of todos) {
    user = users.find((item) => {
      return item.id === todo.userId;
    });
  }
  return (
    <tr>
      <td>{props.todo.title}</td>
      <td>{props.todo.completed.toString()}</td>
      <td><User user={user} /></td>
    </tr>
  );
}
import React from 'react';
import User from './User';

// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td><User user={todo.user} email={todo.email} /></td>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
  </tr>
);

export default TodoItem;

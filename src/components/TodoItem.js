/* eslint-disable react/prop-types */

import React from 'react';
import User from './User';

const TodoItem = props => (
  <li>
    {props.todo.id}
    .
    {' '}
    <strong>{props.todo.title}</strong>
    {' '}
    is for
    {' '}
    <User user={props.todo.user.name} />
    <p style={{ color: props.todo.completed ? 'green' : 'red' }}>
      {props.todo.completed ? 'completed' : 'not done yet'}
    </p>
  </li>
);

export default TodoItem;

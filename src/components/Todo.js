import React from 'react';
import { User } from './User/User';
import { TodoShape } from './shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  // <li>
  <li
    className="
      list-group-item
      list-group-item-action
      rounded-pill
      dropdown my-1
    "
  >
    <User
      taskStatus={completed}
      {...user}
    />
    {
      `${completed ? ' DONE' : ' did not complate'} the task - ${title}`
    }
    {' '}
    {typeof completed}
  </li>
  // </li>
);

Todo.propTypes = TodoShape;

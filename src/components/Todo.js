import React from 'react';
import { User } from './User/User';
import { TodoShape } from './shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <li>
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
);

Todo.propTypes = TodoShape;

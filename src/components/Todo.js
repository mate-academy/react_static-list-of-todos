import React from 'react';
import { User } from './User';
import { TodoType } from './Types';

export const Todo = ({ todo }) => (
  <div>
    <p><User user={todo.user} /></p>
    <p>
      {todo.title}
      {' '}
      -
      <span>{todo.completed ? 'Completed' : 'In process"}</span>
    </p>
  </div>
);

Todo.propTypes = TodoType;

import React from 'react';
import { TodoPropsType } from './TodoPropsType';

export const Todo = ({ title, completed, user }) => (
  <>
    <p>
      Todo:
      {title}
    </p>
    <p>
      Completed:
      {completed ? 'Yes' : 'No'}
    </p>
    <p>
      User:
      {user.name}
    </p>
  </>
);

Todo.propTypes = TodoPropsType;

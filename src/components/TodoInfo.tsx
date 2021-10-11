import React from 'react';
import { Todo } from '../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed }) => (
  <p>
    {` Task : ${title} | status: ${(completed) ? 'completed' : 'not completed'}`}
  </p>
);

import React from 'react';
import { Todo } from '../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed }) => (
  <>
    <p>{title}</p>
    <p>{completed ? 'Done' : 'Undone'}</p>
  </>
);

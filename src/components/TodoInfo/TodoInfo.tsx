import React from 'react';
import { User } from '../User';

export interface TodoInfoProps {
  todo: FullTodos;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <>
    <h3 data-cy="title">{todo.title}</h3>
    <p data-cy="status">{todo.completed}</p>
    <User user={todo.user} />
  </>
);

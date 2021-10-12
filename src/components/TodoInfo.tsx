import React from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../types/Todo';

export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => (
  <>
    <p>
      UserId:
      {todo.userId}
    </p>
    <h3>
      Title:
      {todo.title}
    </h3>
    <h4>
      Is completed:
      {todo.completed ? 'true' : 'false'}
    </h4>
    {todo.user && (
      <UserInfo todoUser={todo.user} />
    )}
  </>
);

import React from 'react';
import { UserInfo, User } from '../UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

export const TodoInfo: React.FC<Todo> = (todo: Todo) => {
  return (
    <div>
      <h3 data-cy="title">{`Title: ${todo.title}`}</h3>
      <p data-cy="status">{`Completed: ${todo.completed.toString()}`}</p>
      {todo.user && (
        <p><UserInfo {...todo.user} /></p>
      )}
    </div>
  );
};

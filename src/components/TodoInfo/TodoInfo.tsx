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
  if (todo.user === null) {
    return (
      <div className="task">
        <p data-cy="title">{`Title: ${todo.title}`}</p>
        <p data-cy="status">{`Completed: ${todo.completed.toString()}`}</p>
      </div>
    );
  }

  return (
    <div>
      <h3 data-cy="title">{`Title: ${todo.title}`}</h3>
      <p data-cy="status">{`Completed: ${todo.completed.toString()}`}</p>
      <p><UserInfo {...todo.user} /></p>
    </div>
  );
};

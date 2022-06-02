import React from 'react';
import { PreparedTodo } from '../../app.typedefs';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: PreparedTodo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <div className="todo" data-cy="title">
      <h3>{`Title: ${title}`}</h3>
      <p data-cy="status">
        {completed
          ? 'Completed'
          : 'Not completed'}
      </p>
      User:
      {user && <UserInfo user={user} />}
    </div>
  );
};
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files

import React from 'react';
import { UserInfo } from '../UserInfo';

interface Props {
  preparedTodo: Todo,
}

export const TodoInfo: React.FC<Props> = ({ preparedTodo }) => {
  const {
    title,
    completed,
    user,
  } = preparedTodo;

  return (
    <div className="todoinfo">
      <h2 data-cy="title">{`Task Name: ${title}`}</h2>
      <h2 data-cy="status">
        {completed
          ? ('Completed')
          : ('Not Completed')}
      </h2>
      {user && (
        <UserInfo user={user} />
      )}
    </div>
  );
};

// Don't forget to import the React library

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files

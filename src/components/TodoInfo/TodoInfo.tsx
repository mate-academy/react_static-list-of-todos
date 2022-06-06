import React from 'react';
import { PreparedTodo } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 data-cy="title">
      {todo.title}
    </h2>
    <p data-cy="status">
      {todo.completed
        ? ('Completed')
        : ('Not completed')}
    </p>
    <p>
      {todo.user && <UserInfo user={todo.user} />}
    </p>
  </>
);
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files

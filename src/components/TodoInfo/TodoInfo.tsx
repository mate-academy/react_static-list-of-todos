import React from 'react';
import { User } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string;
  user: User | null;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, user, completed }) => (
  <>
    <h2 data-cy="title">
      {title}
    </h2>
    <p data-cy="status">
      {completed
        ? ('Completed')
        : ('Not completed')}
    </p>
    <p>
      {user && <UserInfo user={user} />}
    </p>
  </>
);
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files

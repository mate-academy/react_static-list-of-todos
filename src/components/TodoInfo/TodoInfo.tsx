import React from 'react';
import { User } from '../../types';
import { UserInfo } from '../UserInfo';

interface Props {
  title: string,
  completed: boolean,
  user: User | null | undefined,
}

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <div className="todo">
    <h2 data-cy="title">{title}</h2>
    <h3 className="todos__status" data-cy="status">
      {completed ? 'Completed!' : 'Not completed!'}
    </h3>
    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
        company={user.company}
      />
    )}
  </div>
);

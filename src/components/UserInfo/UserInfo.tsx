import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h1 data-cy="username">
      Name:
      {' '}
      {user?.name}
    </h1>

    <div data-cy="email">
      Email:
      {' '}
      {user?.email}
    </div>

    <div data-cy="id">
      User:
      {' '}
      {user?.id}
    </div>
  </>
);

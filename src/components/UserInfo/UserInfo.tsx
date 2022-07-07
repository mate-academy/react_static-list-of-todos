import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="username">{user?.name}</p>
    <p data-cy="email">{user?.email}</p>
  </>
);

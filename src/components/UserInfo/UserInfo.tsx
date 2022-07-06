import React from 'react';
import { User } from '../../types/User';

type Prop = {
  user: User | null;
};

export const UserInfo: React.FC<Prop | null> = ({ user }) => (
  <>
    {user && (
      <>
        <p data-cy="username">{user.name}</p>
        <p data-cy="email">{user.email}</p>
      </>
    )}
  </>
);

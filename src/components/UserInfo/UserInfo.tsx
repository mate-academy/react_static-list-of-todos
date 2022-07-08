import React from 'react';
import { User } from '../../Type/Users';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <p data-cy="username">{user.username}</p>
      <p data-cy="email">{user.email}</p>
    </div>
  );
};

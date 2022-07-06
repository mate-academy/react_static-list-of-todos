import React from 'react';
import { User } from '../../Type/Users';

const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <p data-cy="username">{user.name}</p>
      <p data-cy="email">{user.email}</p>
    </div>
  );
};

export default UserInfo;

import React from 'react';
import { User } from '../../Type/Users';

const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserInfo;

import React from 'react';
import { User } from '../../types/User';

interface UserType {
  user: User;
}

export const UserInfo: React.FC<UserType> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

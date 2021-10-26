import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <span className="userInfo">
    {` || ${user.name} (${user.email})`}
  </span>
);

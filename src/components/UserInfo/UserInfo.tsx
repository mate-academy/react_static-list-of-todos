import React from 'react';
import { User } from '../../types/User';

// Add the required types and props
type P = {
  user: User;
};

export const UserInfo: React.FC<P> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

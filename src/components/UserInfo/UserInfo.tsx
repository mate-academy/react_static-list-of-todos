import React from 'react';
import { User } from '../../types';

type Props = {
  user: User | null;
};
export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    {user === null ? 'no user' : user.name}
    {' - '}
    <span className="email">{user?.email}</span>
  </div>
);

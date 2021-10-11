import React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

type Props = {
  user: User | null;
};
export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <strong>{user === null ? 'no user' : user.name}</strong>
    <p className="email">{user?.email}</p>
  </div>
);

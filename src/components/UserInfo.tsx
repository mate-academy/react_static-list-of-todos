import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="userInfo">
    <span className="userInfo__item">{user.name}</span>
    <span className="userInfo__item">{user.email}</span>
  </div>
);

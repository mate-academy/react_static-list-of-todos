import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="user">
    <div className="user__name">{name}</div>
    <a href={email} className="user__email">{email}</a>
  </div>
);

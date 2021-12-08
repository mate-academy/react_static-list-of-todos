import React from 'react';
import './UserInfo.scss';

import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="userInfo">
    <span>{name}</span>
    <span className="userInfo__email">{email}</span>
  </div>
);

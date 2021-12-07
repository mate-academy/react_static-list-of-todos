import React from 'react';
import './UserInfo.scss';

import { User } from '../types/User';

type UserInfoList = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<UserInfoList> = ({ name, email }) => (
  <div className="userInfo">
    <span>{name}</span>
    <span className="userInfo__email">{email}</span>
  </div>
);

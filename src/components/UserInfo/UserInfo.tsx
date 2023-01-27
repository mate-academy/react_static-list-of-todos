import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

interface UserInfoPropsType {
  user: User;
}

export const UserInfo: React.FC<UserInfoPropsType> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

import React from 'react';
import { UserInfoType } from '../../types/User';

export const UserInfo:React.FC<UserInfoType> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

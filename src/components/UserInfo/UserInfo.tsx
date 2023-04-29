import React from 'react';
import { UserInfoType } from '../../types/User';

export const UserInfo:React.FC<UserInfoType> = ({ user: { name, email } }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);

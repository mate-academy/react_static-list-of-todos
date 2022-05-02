import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="userInfo">
      <div className="userInfo--name">{`Name: ${user.name}`}</div>
      <div className="userInfo--email">{`Email: ${user.email}`}</div>
    </div>
  );
};

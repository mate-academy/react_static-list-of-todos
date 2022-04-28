import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="userinfo">
      <div className="userinfo--name">{`Name: ${user.name}`}</div>
      <div className="userinfo--username">{`Username: ${user.username}`}</div>
      <div className="userinfo--email">{`Email: ${user.email}`}</div>
      <div className="userinfo--phone">{`Phone: ${user.phone}`}</div>
    </div>
  );
};

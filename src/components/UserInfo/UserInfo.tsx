import React from 'react';
import { User } from '../../types/Users';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="userinfo">
      <div className="userinfo__name">{`Name: ${user.name}`}</div>
      <div className="userinfo__username">{`Username: ${user.username}`}</div>
      <div className="userinfo__email">{`Email: ${user.email}`}</div>
      <div className="userinfo__phone">{`Phone: ${user.phone}`}</div>
    </div>
  );
};

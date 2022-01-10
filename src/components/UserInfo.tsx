import React from 'react';
import { User } from '../Types/User';
import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p className="userInfo__name">{`Name: ${user.name}`}</p>
    <p className="userInfo__email">{`Email: ${user.email}`}</p>
  </div>
);

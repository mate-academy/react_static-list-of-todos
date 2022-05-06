import React from 'react';
import { User } from '../Types/Types';
import './UserInfo.scss';

type Props = {
  userInfo: User,
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <div className="user">
    <h3 className="user__name">{userInfo ? userInfo.name : 0}</h3>
    <h3 className="user__username">{userInfo ? userInfo.username : 0}</h3>
    <h3 className="user__email">{userInfo ? userInfo.email : 0}</h3>
    <h3 className="user__phone">{userInfo ? userInfo.phone : 0}</h3>
  </div>
);

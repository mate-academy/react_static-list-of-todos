import React from 'react';
import './UserInfo.scss';
import { ItemType } from '../../types/UserInfoType';

type Props = {
  userInfo: ItemType;
};

export const UserInfo: React.FC <Props> = ({ userInfo }) => (
  <li className="UserInfo">
    <span>{userInfo.name}</span>
    <span>{userInfo.email}</span>
  </li>
);

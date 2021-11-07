import React from 'react';
import './UserInfo.scss';
import { ItemType } from '../../types/UserInfoType';

type Props = {
  userInfo: ItemType;
};

export const UserInfo: React.FC <Props> = ({ userInfo }) => {
  const { name, email } = userInfo;

  return (
    <li className="UserInfo">
      <span>{name}</span>
      <br />
      <span>{email}</span>
    </li>
  );
};

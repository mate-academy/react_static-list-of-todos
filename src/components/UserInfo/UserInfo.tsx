import React from 'react';
import { UserInfoProps } from '../../types';
import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = (props) => {
  return (
    <ul>
      <li key={props.user.id}>
        <div className="username" data-cy="username">{props.user.name}</div>
        <div className="useremail" data-cy="email">{props.user.email}</div>
      </li>
    </ul>
  );
};

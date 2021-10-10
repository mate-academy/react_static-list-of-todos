import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, username, email } = user;

  return (
    <>
      <div className="todos-row-item">{name}</div>
      <div className="todos-row-item">{username}</div>
      <div className="todos-row-item">{email}</div>
    </>
  );
};

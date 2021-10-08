import React from 'react';
import './UserInfo.scss';

import { IUserInfo } from '../../types/Todos';

type Props = {
  user: IUserInfo;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { username, email } = user;

  return (
    <div className="User">
      <h3 className="User__username">{username}</h3>
      <span className="User__email">{email}</span>
    </div>
  );
};

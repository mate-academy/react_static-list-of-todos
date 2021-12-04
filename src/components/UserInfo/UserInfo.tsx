import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <h3 className="user__name">{user.name}</h3>
      <p className="user__email">{user.email}</p>
    </div>
  );
};

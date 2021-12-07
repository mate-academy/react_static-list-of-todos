import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = User;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="user">
      <h3 className="user__name">{name}</h3>
      <p className="user__email">{email}</p>
    </div>
  );
};

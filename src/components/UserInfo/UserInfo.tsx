import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = User;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

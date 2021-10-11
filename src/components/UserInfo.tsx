import React from 'react';
import { User } from '../types/types';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <p>
      {user.name}
    </p>
    <p>
      {user.email}
    </p>
  </div>
);

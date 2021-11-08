import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user__info">
    <p className="user__name">
      {user.name}
    </p>
    <p className="user__nick">
      {user.username}
    </p>
    <p className="user__email">
      {user.email}
    </p>
  </div>
);

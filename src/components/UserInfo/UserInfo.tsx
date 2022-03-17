import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user todo-list__user">
    <div className="user__name">
      {user ? user.name : 'no name'}
    </div>
    {user && (
      <a href={user.email} className="user__email">
        {user.email}
      </a>
    )}
  </div>
);

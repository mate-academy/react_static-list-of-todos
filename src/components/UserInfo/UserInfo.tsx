import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <p className="user__name">
        {user !== null ? user.name : 'Unknown name'}
      </p>
      <p className="user__email">
        {user !== null ? user.email : 'No email'}
      </p>
    </div>
  );
};

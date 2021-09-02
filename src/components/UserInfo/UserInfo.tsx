import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user">
      <p className="user__name">
        {user !== null ? name : 'Unknown name'}
      </p>
      <p className="user__email">
        {user !== null ? email : 'Unknown email'}
      </p>
    </div>
  );
};

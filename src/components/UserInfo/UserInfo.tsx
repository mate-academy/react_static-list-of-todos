import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <span>{user.name}</span>
      <span className="UserInfo__email">
        {user.email}
      </span>
    </div>
  );
};

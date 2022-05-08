import React from 'react';
import './UserInfo.scss';

import { User } from '../types';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return (
      <div className="noUserInfo">User not found</div>
    );
  }

  return (
    <ul className="userInfo">
      <li>
        {`Name: ${user.name}`}
      </li>
      <li>
        {`Username: ${user.username}`}
      </li>
      <li>
        {user.email}
      </li>
    </ul>
  );
};

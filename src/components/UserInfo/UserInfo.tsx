// import { userInfo } from 'os';
import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  if (user) {
    const mail = `mailto:${user.email}`;

    return (
      <div className="user_info">
        User name:
        {' '}
        {user.name}
        <br />
        User email:
        {' '}
        <a href={mail}>
          {user.email}
        </a>
      </div>
    );
  }

  return (
    <div className="user_info">
      No user assigned
    </div>
  );
};

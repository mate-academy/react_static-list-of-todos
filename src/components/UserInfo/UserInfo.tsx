import React from 'react';
import { User as UserItem } from '../../types/User';
import './UserInfo.scss';

type User = {
  user: UserItem | null;
};

export const UserInfo: React.FC<User> = (props) => {
  const { user } = props;

  return (
    <a
      className="UserInfo"
      href={`mailto:${user?.email}`}
    >
      {user?.name}
    </a>
  );
};

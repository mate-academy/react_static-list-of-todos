import React from 'react';
import { User } from '../../types/User';

type UserInfoProps = {
  user: User | null
};

export const UserInfo:React.FC<UserInfoProps> = ({ user }) => {
  if (user) {
    const { email, name } = user;

    return (
      <a className="UserInfo" href={email}>
        {name}
      </a>
    );
  }

  return null;
};

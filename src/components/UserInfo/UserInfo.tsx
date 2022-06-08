import React from 'react';
import { User } from '../../interfaces/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p className="item__name" data-cy="username">{user.name}</p>

      <p className="item__email" data-cy="email">{user.email}</p>
    </>
  );
};

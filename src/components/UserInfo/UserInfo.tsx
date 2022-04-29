import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      <h3 data-cy="username">{user.name}</h3>
      <a data-cy="email" href="email">{user.email}</a>
    </>
  );
};

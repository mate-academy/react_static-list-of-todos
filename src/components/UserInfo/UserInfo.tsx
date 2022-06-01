import React from 'react';
import { User } from '../../types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <>
      <p data-cy="username">{name}</p>
      <p data-cy="email">{email}</p>
    </>
  );
};

import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      <h3>{user.name}</h3>
      <a href="email">{user.email}</a>
    </>
  );
};

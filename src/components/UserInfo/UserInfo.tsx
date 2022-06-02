import React from 'react';
import { User } from '../../types';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <ul>
      <li data-cy="username">{user.name}</li>
      <li data-cy="email">{user.email}</li>
      <li>{`Company: ${user.company.name}`}</li>
    </ul>
  );
};

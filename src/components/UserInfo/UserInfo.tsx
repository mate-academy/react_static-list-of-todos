import React from 'react';
import { User } from '../../types';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <ul>
      <li>{`Name: ${user.name}`}</li>
      <li data-cy="email">{`Email: ${user.email}`}</li>
    </ul>
  );
};

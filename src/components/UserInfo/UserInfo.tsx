import React from 'react';
import { User } from '../../types/Todo';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    user && (
      <ul>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    )
  );
};

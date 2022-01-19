import React from 'react';
import { User } from '../../types/Todo';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul>
    <li>{user.name}</li>
    <li>{user.username}</li>
    <li>{user.email}</li>
  </ul>
);

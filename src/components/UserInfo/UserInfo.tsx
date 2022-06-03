import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul>
    <li data-cy="username">{user.name}</li>
    <li data-cy="email">{user.email}</li>
  </ul>
);

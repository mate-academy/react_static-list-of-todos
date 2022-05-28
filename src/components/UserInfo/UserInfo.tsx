import React from 'react';
import { User } from '../../react-app-env';

interface Prop {
  user: User | null
}

export const UserInfo:React.FC<Prop> = ({ user }) => (
  <>
    <h3 data-cy="username">{user?.name}</h3>
    <p data-cy="email">{user?.email}</p>
  </>
);

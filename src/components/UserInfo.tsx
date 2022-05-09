import React from 'react';
import { User } from '../types/UserTypes';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <strong>{'Name: '}</strong>
    {user.name}
    <strong>{' Email: '}</strong>
    {user.email}
  </>
);

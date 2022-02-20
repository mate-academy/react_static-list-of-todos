import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {` User name: ${user.name}`}
    {` User email: ${user.email}`}
  </>
);

import React from 'react';
import { User } from '../types/types';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{`Name: ${user.name}`}</p>
    <p>{`Username: ${user.username}`}</p>
    <p>{`Email: ${user.email}`}</p>
  </>
);

import React from 'react';
import { Executor } from '../Types/User';

export const UserInfo: React.FC<Executor> = ({ user }) => (
  <>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </>
);

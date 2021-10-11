import React from 'react';
import { User } from './types/User';

export const UserInfo: React.FC<User> = ({ name, username, email }) => {
  return (
    <>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </>
  );
};

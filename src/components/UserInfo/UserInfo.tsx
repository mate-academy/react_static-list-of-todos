import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<Partial<User>> = ({
  name,
  username,
  email,
}) => (
  <>
    <td>{name}</td>
    <td>{username}</td>
    <td>{email}</td>
  </>
);

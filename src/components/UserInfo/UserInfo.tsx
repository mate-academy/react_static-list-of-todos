import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<Partial<User>> = ({
  id,
  name,
  username,
  email,
}) => (
  <>
    <th scope="row">{id}</th>
    <td>{username}</td>
    <td>{email}</td>
    <td>{name}</td>
  </>
);

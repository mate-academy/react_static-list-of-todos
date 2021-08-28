import React from 'react';

import { User } from '../User';

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

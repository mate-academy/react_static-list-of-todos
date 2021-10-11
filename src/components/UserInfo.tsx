import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, username, email }) => (
  <>
    <span>
      {'Name: '}
      {username}
      {' ('}
      {name}
      {') '}
    </span>
    <span>
      {'Email: '}
      {email}
    </span>
  </>
);

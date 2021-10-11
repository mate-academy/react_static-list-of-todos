import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = props => (
  <>
    <span>
      {'Name: '}
      {props.username}
      {' ('}
      {props.name}
      {') '}
    </span>
    <span>
      {'Email: '}
      {props.email}
    </span>
  </>
);

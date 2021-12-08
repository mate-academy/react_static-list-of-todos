import React from 'react';
import { User } from '../../typedefs/User';

interface Prop {
  user: User;
}

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <p className="user-info">
    {user.name}
    <br />
    {user.email}
  </p>
);

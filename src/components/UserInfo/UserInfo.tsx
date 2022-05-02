import React from 'react';
import { User } from '../../types/User';

// ...

export const UserInfo: React.FC<User> = ({ name, email, phone }) => (
  <div className="user">
    <h3 className="user__name">{name}</h3>
    <div className="user__email">{email}</div>
    <div className="user__phone">{phone}</div>
  </div>
);

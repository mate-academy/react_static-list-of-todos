import React from 'react';
import { Users } from '../types/Users';

export const UserInfo: React.FC<Users> = ({ email, name }) => (
  <div className="User">
    <h3 className="User__name">{name}</h3>
    <span className="User_email">{email}</span>
  </div>
);

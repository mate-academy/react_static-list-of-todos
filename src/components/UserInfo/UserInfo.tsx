import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<Partial<User>> = ({ name, username, email }) => (
  <>
    <div className="todos-row-item">{name}</div>
    <div className="todos-row-item">{username}</div>
    <div className="todos-row-item">{email}</div>
  </>
);

import React from 'react';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ username, email }) => (
  <div className="user-info">
    <p>{`User: ${username} | email:${email}`}</p>
  </div>
);

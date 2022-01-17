import React from 'react';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ username, email }) => (
  <div className="userinfo">
    <p>{`User: ${username} | email:${email}`}</p>
  </div>
);

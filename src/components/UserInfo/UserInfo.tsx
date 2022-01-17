import React from 'react';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
}) => (
  <>
    <h2>{name}</h2>
    <span>
      <strong>Username:</strong>
      {` ${username}`}
    </span>
    <br />
    <span>
      <strong>Email:</strong>
      {` ${email}`}
    </span>
  </>
);

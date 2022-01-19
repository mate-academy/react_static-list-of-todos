import React from 'react';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div>
    <h2>{name}</h2>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

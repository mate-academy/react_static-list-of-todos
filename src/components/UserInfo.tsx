import React from 'react';

export const UserInfo: React.FC<Partial<User>> = ({ name, username, email }) => (
  <>
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  </>
);

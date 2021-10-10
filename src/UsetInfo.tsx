import React from 'react';

export const UserInfo: React.FC<User> = ({ name, username, email }) => {
  return (
    <>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </>
  );
};

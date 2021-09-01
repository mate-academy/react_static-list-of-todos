import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    id, name, username, email,
  } = user;

  return (
    <>
      <th scope="row">{id}</th>
      <td>{username}</td>
      <td>{email}</td>
      <td>{name}</td>
    </>
  );
};

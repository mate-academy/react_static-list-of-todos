import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, username, email } = props.user;

  return (
    <>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </>
  );
};

import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  todoUser: User;
};

export const UserInfo: React.FC<Props> = ({ todoUser }) => {
  return (
    <>
      <td>{todoUser.name}</td>
      <td>{todoUser.email}</td>
    </>
  );
};

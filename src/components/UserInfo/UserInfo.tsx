import React from 'react';
import { User } from '../../types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Email: ${user.email}`}</p>
    </>
  );
};

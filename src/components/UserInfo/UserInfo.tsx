import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <p data-cy="username">{`Name: ${user.name}`}</p>
      <p dtat-cy="email">{`Email: ${user.email}`}</p>
    </>
  );
};

export default UserInfo;

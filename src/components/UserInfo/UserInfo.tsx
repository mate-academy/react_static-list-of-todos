import React from 'react';
import { User } from '../../type/user';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Email: ${user.email}`}</p>
    </div>
  );
};

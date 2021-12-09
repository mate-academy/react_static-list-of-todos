import React from 'react';
import { User } from '../../type/user';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      {user
        ? `${user.name} - ${user?.email}`
        : null}
    </>
  );
};
